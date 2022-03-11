import React from "react";
import { useState } from "react";
import moment from "moment";

function getFrMonthStr(monthNumber) {
    switch (monthNumber) {
        case 1 : return "Janvier";
        case 2 : return "Février";
        case 3 : return "Mars";
        case 4 : return "Avril";
        case 5 : return "Mai";
        case 6 : return "Juin";
        case 7 : return "Juillet";
        case 8 : return "Août";
        case 9 : return "Septembre";
        case 10 : return "Octobre";
        case 11 : return "Novembre";
        case 12 : return "Décembre";
    }
}

export function Calendar() {
    const today = new Date();
    // const todayFR = today.toLocaleDateString();

    const [todayMonth, setTodayMonth] = useState(today.getMonth() + 1);
    const [todayYear, setTodayYear] = useState(today.getFullYear());

    // const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    // const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    // const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    // const firstDayFR = firstDay.toLocaleDateString();
    // const lastDayFR = lastDay.toLocaleDateString();

    // const lastDayLastMonthFR = lastDayLastMonth.toLocaleDateString();

    function prevMonth() {
        setTodayMonth(todayMonth - 1);
        if (todayMonth <= 1) setTodayMonth(12);
    }
    
    function nextMonth() {
        setTodayMonth(todayMonth + 1);
        if (todayMonth >= 12) setTodayMonth(1);
    }
    
    function prevYear() {
        setTodayYear(todayYear - 1);
    }
    
    function nextYear() {
        setTodayYear(todayYear + 1);
    }

    const [state, setState] = useState({
        momentFunc: moment()
    });

    const daysInMonthFunc = () => {
        return state.momentFunc.daysInMonth();
    };

    const currentDayFunc = () => {
        return state.momentFunc.format("D");
    };

    const firstDayOfMonth = () => {
        let momentFunc = state.momentFunc;
        let firstDay = moment(momentFunc)
        .startOf("month")
        .format("d"); // Day of week 0...1..5...6
        return firstDay;
    };

    function render() {
        let jous_vide = [];
        let jours = [];
        
        for (let i = 0; i < firstDayOfMonth(); i++) {
            jous_vide.push(<td className="">{""}</td>);
        }
        for (let d = 1; d <= daysInMonthFunc(); d++) {
            let currentDay = d == currentDayFunc() ? "today" : "";
            jours.push(
                <td key={d} className={`jour ${currentDay}`}>
                <span>
                    {d}
                </span>
                </td>
            );
        }
        
        var totalSlots = [...jous_vide, ...jours];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            // let insertRow = cells.slice();
            rows.push(cells);
        }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <div className="tail-datetime-calendar">
                <table>
                    <thead>
                        <tr>
                            <th className="link-primary" style={{ cursor : "pointer" }} onClick={prevMonth}>&lt;&lt;</th>
                            <th colSpan="5" className="text-center">{ getFrMonthStr(todayMonth) }</th>
                            <th className="link-primary" style={{ cursor : "pointer" }} onClick={nextMonth}>&gt;&gt;</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th className="link-primary" style={{ cursor : "pointer" }} onClick={prevYear}>&lt;&lt;</th>
                            <th colSpan="5" className="text-center">{ todayYear }</th>
                            <th className="link-primary" style={{ cursor : "pointer" }} onClick={nextYear}>&gt;&gt;</th>
                        </tr>
                    </thead>

                    <thead>
                        <tr>
                            <th>Lu</th>
                            <th>Ma</th>
                            <th>Me</th>
                            <th>Je</th>
                            <th>Ve</th>
                            <th>Sa</th>
                            <th>Di</th>
                        </tr>
                    </thead>
                
                    <tbody>{daysinmonth}</tbody>
                </table>
            </div>
        );
    }

  return <>
    {render()}
  </>
}
