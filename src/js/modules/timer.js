const timer = (id, deadline) => {

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 /60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor((t / (1000 * 60 * 60 * 24)));


        return {
            total: t,
            seconds,
            minutes,
            hours,
            days,
        }
    };

    const beatifyTime = (num) => {
        if(num <=9) {
            return `0${num}`;
        } else {
            return num
        }
        
    }

    const setClock = (selector, endtime) => {
        const timerEl = document.querySelector(selector);
        const days = timerEl.querySelector('#days');
        const hours = timerEl.querySelector('#hours');
        const minutes = timerEl.querySelector('#minutes');
        const seconds = timerEl.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000)

        updateClock();
        function updateClock() {
            const t =  getTimeRemaining(endtime);

            days.textContent = beatifyTime(t.days);
            hours.textContent = beatifyTime(t.hours);
            minutes.textContent = beatifyTime(t.minutes);
            seconds.textContent = beatifyTime(t.seconds);

            if(t.total  <= 0) {
                
                days.textContent = `00`;
                hours.textContent = `00`;
                minutes.textContent = `00`;
                seconds.textContent = `00`;
                clearInterval(timeInterval);
            }
        }

    }

    setClock(id, deadline);
};


export default timer;