// A class dedicated to time handling
class Time {
    constructor(initialTime = new Date()) {
        this._time = initialTime;
    }

    // ensure we never set past times
    set(value) {
        const now = new Date();

        if (value < now) {
            this._time = now;
        } else {
            this._time = value;
        }
    }

    get() {
        return this._time;
    }
}

// The main class that *uses* Time
export class Set_date {
    constructor(decide, time = new Date()) {
        this._decide = decide;
        this._time = new Time(time); // composition
    }

    get decide() {
        return this._decide;
    }

    get time() {
        return this._time.get();
    }

    set time(value) {
        if (this._decide === "start" || this._decide === "end") {
            this._time.set(value);
        }
    }

    change_time(value) {
        this._time.set(value);
    }
}


export class Completed{
    constructor(completed)
    {
        this._completed = completed;
    }

    get completed()
    {
        return this._completed;
    }

    set completed(value)
    {   
        if(value == false || value == true)
        {
            this._completed = value;
        }
        else
        {
            this._completed = false;
        }
    }

    toggle()
    {
        this._completed = !this._completed;
    }
}
