export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp, keepSourceTimeZone=false) {
  if(keepSourceTimeZone){
    const timeStampWithNoZone = timestamp.substr(0, 19);
    const timeZoneString = timestamp.substr(19);
    return (
      `${new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(new Date(timeStampWithNoZone))} UCT${timeZoneString}`
    );
  }else{
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    }).format(new Date(timestamp));
  }
}
