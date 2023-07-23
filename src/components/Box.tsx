'use client';

import moment from "moment";
import Big from './Big'
import { useEffect, useState } from "react";

export default function Box() {
    const [time, setTime] = useState<string>();
  useEffect(() => {
    setTime(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, []); 

  return (
    <div
      className="flex flex-col items-center justify-between p-24"
    >
      {time?<Big/>:"Loading..."}
    </div>
  );
}
