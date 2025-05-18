import React, { useState, useEffect } from "react";

const AnalogClockWithOuterSchedule = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Ubah Bagian Sini Aja Guys >_<
const activities = [
  { name: "Tahajud & Sholat Subuh", start: 3.75, end: 5 },
  { name: "Persiapan hari / tilawah / dzikir", start: 5, end: 5.5 },
  { name: "Sholat Dhuha", start: 5.5, end: 6 },
  { name: "Olahraga ringan", start: 6, end: 7 },
  { name: "Sarapan & mandi", start: 7, end: 7.5 },
  { name: "Kursus Bahasa", start: 7.5, end: 9.5 },
  { name: "Kerja Startup / Bisnis", start: 9.5, end: 12 },
  { name: "Sholat Dzuhur", start: 12, end: 12.5 },
  { name: "Istirahat / makan siang", start: 12.5, end: 13 },
  { name: "Kerja Startup / Finance / Admin", start: 13, end: 15 },
  { name: "Sholat Ashar", start: 15, end: 15.5 },
  { name: "Kursus Non-bahasa", start: 15.5, end: 17 },
  { name: "Sholat Maghrib", start: 17, end: 17.5 },
  { name: "Waktu santai / keluarga / hobi", start: 17.5, end: 19 },
  { name: "Sholat Isya & makan malam", start: 19, end: 19.5 },
  { name: "Review tugas & planning esok", start: 19.5, end: 21 },
  { name: "Tidur singkat / Power nap", start: 21, end: 22 },
  { name: "Meeting / brainstorming", start: 22, end: 23 },
  { name: "Relaksasi / journaling", start: 23, end: 23.25 },
  { name: "Deep Sleep", start: 23.25, end: 3.75 },
];

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = ((time.getHours() % 2) * 60 + time.getMinutes()) * 3;
  const hoursDegrees = time.getHours() * 15 + time.getMinutes() / 8;

  return (
    <div className="outer-container ">
      <h2 style={{ margin: 10 }}>Nana's Daily Routine! 💸✨</h2>
      <p style={{ margin: 0 }}>
        <i><em>Progress, not perfection. Every step counts!</em></i>
      </p>
      <h3 style={{ margin: 10 }}>Ce qu'on fait aujourd'hui</h3>
      <div className="clock-container">
        <div className="clock">
          {activities.map((activity, index) => {
            const middle = (activity.start + activity.end) / 2;
            // Ubah valuenya jika ada activity yang bacanya kebalik-balik
            const isRightSide = middle >= 2 && middle <= 12;

            return (
              <div key={index}>
                <div
                  className="activity-segment"
                  style={{
                    transform: `rotate(${activity.start * 15}deg)`,
                    height: "170px",
                    transformOrigin: "bottom center",
                    position: "absolute",
                    width: "1px",
                    bottom: "50%",
                    left: "calc(50% - 0.5px)",
                    backgroundColor: "black",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "49%",
                    left: "43%",
                    fontSize: "14px",
                    fontWeight: "bold",
                    transform: `rotate(${
                      middle * 15
                    }deg) translate(0, -120px) rotate(${
                      isRightSide ? "-90deg" : "90deg"
                    })`,
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  {activity.name}
                </span>
              </div>
            );
          })}

          {[...Array(24)].map((_, index) => {
            const hour = ((index + 23) % 24) + 1;
            return (
              <div
                key={index}
                className="hour-marker"
                style={{
                  transform: `rotate(${index * 15}deg)`,
                  height: "100%",
                  width: "1px",
                  position: "absolute",
                  left: "calc(50% - 0.5px)",
                }}
              >
                <div
                  style={{
                    height: "15px",
                    width: "3px",
                    backgroundColor: "black",
                    borderRadius: "100px",
                    position: "absolute",
                    top: "-10px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "-35px",
                    transform: `rotate(-${index * 15}deg) translate(-50%, 0)`,
                    transformOrigin: "center",
                    fontWeight: "bold",
                    marginTop: "-5px",
                  }}
                >
                  {hour}
                </div>
              </div>
            );
          })}
          <div
            className="hand hour-hand"
            style={{ transform: `rotate(${hoursDegrees}deg)` }}
          />
          <div
            className="hand minute-hand"
            style={{ transform: `rotate(${minutesDegrees}deg)` }}
          />
          <div
            className="hand second-hand"
            style={{ transform: `rotate(${secondsDegrees}deg)` }}
          />
          <div className="center-circle">
            <span>Go!!</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center; 
          height: 100vh; 
          font-family: Arial, sans-serif;
        }
        .clock-container {
          margin-top:50px;
          padding: 5px;
          border: 2px solid black;
          border-radius: 50%;
        }
        .clock {
          width: 400px;
          height: 400px;
          border: 2px solid black;
          border-radius: 50%;
          position: relative;
        }
        .hand {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform-origin: bottom center;
          background-color: black;
        }
        .hour-hand {
          width: 8px;
          height: 80px;
          margin-left: -3px;
          border-radius: 10px;
        }
        .minute-hand {
          border-radius: 10px;
          width: 6px;
          height: 110px;
          margin-left: -2px;
        }
        .second-hand {
          border-radius: 10px;
          width: 4px;
          height: 150px;
          margin-left: -1px;
          background-color: red;
          border-radius:'100%;
        }
        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background-color: orange;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight:bold;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default AnalogClockWithOuterSchedule;
