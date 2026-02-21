export const TECHNICIAN_NAMES = [
    "Rajesh Kumar", "Amit Sharma", "Vikram Singh", "Sunil Gehlot", "Ramesh Bishnoi",
    "Suresh Prakash", "Dinesh Vyas", "Kamlesh Parihar", "Mahendra Rathi", "Pawan Godara",
    "Kailash Choudhary", "Ravi Bhati", "Deepak Soni", "Anil Ojha", "Gopal Maru",
    "Hariom Swami", "Narayan Dudi", "Lalit Khatri", "Mohan Nai", "Prem Saini"
];

// Simple deterministic hash based on string to prevent SSR hydration errors
export const getStringHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
};
