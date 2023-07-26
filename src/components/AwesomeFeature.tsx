'use client';

import {format} from "date-fns";
import Small from './Small'
import { useEffect, useState } from "react";

export default function AwesomeFeature() {
  const [time, setTime] = useState<string>();
  
  useEffect(() => {
    setTime(format(new Date(), "MMMM Do YYYY, h:mm:ss a"));
  }, []); 

  return (
    <div
      className="flex flex-col items-center justify-between p-24"
    >
      { time ? <Small/> : "Loading..." }
    </div>
  );
}
