import { useState } from "react";
import moment from 'moment'

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

export const Calendar = () => {

    
    const today = new Date();
    const todayFR = today.toLocaleDateString();

    // const todayMonth = today.getMonth() + 1;
    const [todayMonth, setTodayMonth] = useState(today.getMonth() + 1);
    const [todayYear, setTodayYear] = useState(today.getFullYear());

    // console.log(todayFR);

    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    const firstDayFR = firstDay.toLocaleDateString();
    const lastDayFR = lastDay.toLocaleDateString();

    const lastDayLastMonthFR = lastDayLastMonth.toLocaleDateString();
    
    // console.log(firstDayFR, lastDayFR);

    // console.log(lastDayLastMonth);

    // console.log(today.getDay()); // entre 0 et 6 => 0 = Dimanche  

    // console.log(todayMonth);

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

    // console.log(firstDay.getDay()); // le jour de la première date du mois
    
    return <>
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
        </table>
    </>
}