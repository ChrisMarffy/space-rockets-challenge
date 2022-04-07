
export function formatDate(timestamp: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

/**
 * Formats an ISO timestamp string into a format in the pattern:
 * November 21, 2020, 9:17:00 AM {Timezone or Offset}
 * @param {string} timestamp - An ISO timestamp
 * @param {boolean} keepSourceTimeZone - Whether to return the string in the timezone 
 * specified in the ISO offset (true), or the users local timezone (false, default)
 * @returns 
 */
export function formatDateTime(timestamp: string, keepSourceTimeZone=false) {
  const dateFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  } as const;

  if(keepSourceTimeZone){
    const timeStampWithNoZone = timestamp.substring(0, 19);
    const timeZoneString = timestamp.substring(19);

    //Return date without timezone + the seperated offset string
    return `${new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
      new Date(timeStampWithNoZone)
    )} UCT${timeZoneString}`;
  }else{

    //Return date with the users local timezone included
    return new Intl.DateTimeFormat("en-US", {
      ...dateFormatOptions,
      timeZoneName: "short",
    }).format(new Date(timestamp));
  }
}
