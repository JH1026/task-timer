
export const timStrToNumbers = (time: string) => {
  const numberTime = time.split(":").map(item => Number(item));
  return [numberTime[0], numberTime[1], numberTime[2]];
};


export const timeStrToSeconds = (time: string) => {
  const numberTime = time.split(":").map(item => Number(item));
  return numberTime[0]*3600 + numberTime[1]*60 + numberTime[2];
};