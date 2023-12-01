export interface WeekDayrops {
    day: string;
    abbr: string;
    selected: string;
    handleChange: (day: string) => void;
}

export interface DaysOfWeeksProps {
    handleChange: (value: string | null, bane: string) => void;
}

export interface TimeComponentProps {
    isActive: boolean;
    handleShow: () => void;
    label: string;
    time: Date | null;
    showClock: boolean;
    setShowClock: React.Dispatch<React.SetStateAction<boolean>>;
    handleChange: (e: any, obj: any) => void;
}

export interface DateComponentProps {
    isActive: boolean;
    handleShow: () => void;
    label: string;
    date: Date | null;
    showCalendar: boolean;
    setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
    handleChangeDate: (e: any, obj: any) => void;
}

export interface WeekComponentProps {
    isActive: boolean;
    handleShow: () => void;
    label: string;
    weekDate: string | null;
    handleChange: (e: any, obj: any) => void;
}