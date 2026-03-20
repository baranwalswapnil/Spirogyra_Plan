// festival.js - Festival configuration and popup

// Festival Data Configuration
const festivals = [
    // ── COMPLETE 2026 FESTIVAL + SPECIAL DAYS ARRAY ──────────────────────────────

{
    name: "New Year",
    emoji: "🎉",
    start: new Date(2025, 11, 30),
    end: new Date(2026, 0, 10),
    colors: ["#FFD700"],
    particles: ["🎉", "🎊", "✨", "2026"]
},
{
    name: "Lohri / Makar Sankranti",
    emoji: "🪁",
    start: new Date(2026, 0, 11),
    end: new Date(2026, 0, 14),
    colors: ["#FF4500"],
    particles: ["🪁", "🔥", "🌾", "🍬"]
},
{
    name: "Vasant Panchami",
    emoji: "🌼",
    start: new Date(2026, 0, 23),
    end: new Date(2026, 1, 1),
    colors: ["#FFD700", "#FFFF00"],
    particles: ["🌼", "📚", "🎶", "🌕"]
},
{
    name: "Republic Day",
    emoji: "🇮🇳",
    start: new Date(2026, 0, 24),
    end: new Date(2026, 0, 27),
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    particles: ["🇮🇳", "🤍", "💚", "🏵️"]
},

// 💝 VALENTINE'S WEEK — Feb 7 to 14
{
    name: "Rose Day",
    emoji: "🌹",
    start: new Date(2026, 1, 7),
    end: new Date(2026, 1, 7),
    colors: ["#FF0055", "#FF69B4"],
    particles: ["🌹", "💐", "❤️", "🌸"]
},
{
    name: "Propose Day",
    emoji: "💍",
    start: new Date(2026, 1, 8),
    end: new Date(2026, 1, 8),
    colors: ["#FF1493", "#FFD700"],
    particles: ["💍", "💬", "💖", "🥺"]
},
{
    name: "Chocolate Day",
    emoji: "🍫",
    start: new Date(2026, 1, 9),
    end: new Date(2026, 1, 9),
    colors: ["#7B3F00", "#D2691E"],
    particles: ["🍫", "🍬", "🍭", "💝"]
},
{
    name: "Teddy Day",
    emoji: "🧸",
    start: new Date(2026, 1, 10),
    end: new Date(2026, 1, 10),
    colors: ["#C68642", "#FFD700"],
    particles: ["🧸", "🤎", "🫂", "💛"]
},
{
    name: "Promise Day",
    emoji: "🤝",
    start: new Date(2026, 1, 11),
    end: new Date(2026, 1, 11),
    colors: ["#4169E1", "#87CEEB"],
    particles: ["🤝", "💞", "🌟", "🫶"]
},
{
    name: "Hug Day",
    emoji: "🫂",
    start: new Date(2026, 1, 12),
    end: new Date(2026, 1, 12),
    colors: ["#FF8C00", "#FFA500"],
    particles: ["🫂", "💓", "🧡", "🤗"]
},
{
    name: "Kiss Day",
    emoji: "💋",
    start: new Date(2026, 1, 13),
    end: new Date(2026, 1, 13),
    colors: ["#FF0066", "#FF69B4"],
    particles: ["💋", "😘", "❤️", "💄"]
},
{
    name: "Valentine's Day",
    emoji: "💘",
    start: new Date(2026, 1, 14),
    end: new Date(2026, 1, 15),
    colors: ["#FF0000", "#FF69B4", "#FFD700"],
    particles: ["💘", "💝", "🌹", "💑"]
},

{
    name: "Maha Shivaratri",
    emoji: "🕉️",
    start: new Date(2026, 1, 17),
    end: new Date(2026, 1, 18),
    colors: ["#6A0DAD"],
    particles: ["🕉️", "🔱", "🌙", "🙏"]
},

// 👩 WOMEN'S DAY — Mar 8
{
    name: "International Women's Day",
    emoji: "👩",
    start: new Date(2026, 2, 8),
    end: new Date(2026, 2, 18),
    colors: ["#800080", "#FF69B4"],
    particles: ["👩", "💜", "✊", "🌸"]
},

// 🪷 CHAITRA NAVARATRI — Mar 19 to Mar 28
{
    name: "Chaitra Navaratri",
    emoji: "🪷",
    start: new Date(2026, 2, 19),
    end: new Date(2026, 2, 28),
    colors: ["#FF4500", "#FFD700", "#FF69B4"],
    particles: ["🪷", "🔱", "💃", "🌺", "🙏", "✨"]
},
{
    name: "Holi",
    emoji: "🎨",
    start: new Date(2026, 2, 19),
    end: new Date(2026, 2, 21),
    colors: ["#FF00FF", "#FFFF00", "#00FF00", "#FF0000", "#0000FF"],
    particles: ["🎨", "🔴", "🟡", "🟢", "🔵"]
},
{
    name: "Ugadi / Gudi Padwa",
    emoji: "🌿",
    start: new Date(2026, 2, 19),
    end: new Date(2026, 2, 21),
    colors: ["#228B22", "#FFD700"],
    particles: ["🌿", "🪔", "🌺", "🍯"]
},
{
    name: "Ram Navami",
    emoji: "🏹",
    start: new Date(2026, 2, 26),
    end: new Date(2026, 2, 27),
    colors: ["#FF6600", "#FFD700"],
    particles: ["🏹", "🙏", "🪔", "🌸"]
},
{
    name: "Eid al-Fitr",
    emoji: "☪️",
    start: new Date(2026, 2, 30),
    end: new Date(2026, 3, 1),
    colors: ["#009900", "#FFD700"],
    particles: ["☪️", "🌙", "⭐", "🕌"]
},
{
    name: "Hanuman Jayanti",
    emoji: "🐒",
    start: new Date(2026, 3, 2),
    end: new Date(2026, 3, 2),
    colors: ["#FF6600", "#FFD700"],
    particles: ["🐒", "🪔", "🌺", "🙏"]
},
{
    name: "Mahavir Jayanti",
    emoji: "🕊️",
    start: new Date(2026, 3, 10),
    end: new Date(2026, 3, 10),
    colors: ["#FFFFFF", "#008000"],
    particles: ["🕊️", "☮️", "🌸", "🙏"]
},
{
    name: "Baisakhi",
    emoji: "🌾",
    start: new Date(2026, 3, 14),
    end: new Date(2026, 3, 14),
    colors: ["#FFD700", "#FF6600"],
    particles: ["🌾", "💃", "🥁", "🙏"]
},
{
    name: "Good Friday / Easter",
    emoji: "✝️",
    start: new Date(2026, 3, 3),
    end: new Date(2026, 3, 5),
    colors: ["#8B0000", "#FFFFFF"],
    particles: ["✝️", "🌷", "🕊️", "🥚"]
},
{
    name: "Akshaya Tritiya",
    emoji: "🪙",
    start: new Date(2026, 3, 19),
    end: new Date(2026, 3, 19),
    colors: ["#FFD700", "#FFA500"],
    particles: ["🪙", "💰", "🌟", "🪔"]
},

// 👷 LABOUR DAY — May 1
{
    name: "International Labour Day",
    emoji: "✊",
    start: new Date(2026, 4, 1),
    end: new Date(2026, 4, 1),
    colors: ["#CC0000", "#FFD700"],
    particles: ["✊", "🔨", "⚙️", "🌍"]
},
{
    name: "Buddha Purnima",
    emoji: "☸️",
    start: new Date(2026, 4, 1),
    end: new Date(2026, 4, 1),
    colors: ["#FFD700", "#FF8C00"],
    particles: ["☸️", "🪷", "🕊️", "🙏"]
},

// 👩‍👧 MOTHER'S DAY — 2nd Sunday of May = May 10
{
    name: "Mother's Day",
    emoji: "👩‍👧",
    start: new Date(2026, 4, 10),
    end: new Date(2026, 4, 10),
    colors: ["#FF69B4", "#FFB6C1"],
    particles: ["👩‍👧", "🌷", "💐", "❤️"]
},
{
    name: "Eid al-Adha",
    emoji: "🐑",
    start: new Date(2026, 4, 27),
    end: new Date(2026, 4, 28),
    colors: ["#006400", "#FFD700"],
    particles: ["🐑", "☪️", "🌙", "🕌"]
},

// 👨‍👧 FATHER'S DAY — 3rd Sunday of June = Jun 21
{
    name: "Father's Day",
    emoji: "👨‍👧",
    start: new Date(2026, 5, 21),
    end: new Date(2026, 5, 21),
    colors: ["#1E90FF", "#4682B4"],
    particles: ["👨‍👧", "👔", "⚽", "❤️"]
},
{
    name: "Jagannath Rath Yatra",
    emoji: "🎡",
    start: new Date(2026, 5, 20),
    end: new Date(2026, 5, 21),
    colors: ["#FF0000", "#FFD700", "#000000"],
    particles: ["🎡", "🛕", "🌺", "🙏"]
},
{
    name: "Guru Purnima",
    emoji: "📿",
    start: new Date(2026, 6, 17),
    end: new Date(2026, 6, 17),
    colors: ["#FFD700", "#FFA500"],
    particles: ["📿", "🙏", "🌕", "📖"]
},

// 🌐 FRIENDSHIP DAY — 1st Sunday of August = Aug 2
{
    name: "Friendship Day",
    emoji: "👫",
    start: new Date(2026, 7, 2),
    end: new Date(2026, 7, 2),
    colors: ["#FF6347", "#FFD700"],
    particles: ["👫", "🤝", "💛", "🎀"]
},
{
    name: "Independence Day",
    emoji: "🏅",
    start: new Date(2026, 7, 15),
    end: new Date(2026, 7, 15),
    colors: ["#FF9933", "#FFFFFF", "#138808"],
    particles: ["🏅", "🇮🇳", "🕊️", "🌟"]
},
{
    name: "Onam",
    emoji: "🌸",
    start: new Date(2026, 7, 24),
    end: new Date(2026, 7, 28),
    colors: ["#FF6600", "#FFD700", "#008000"],
    particles: ["🌸", "🚣", "🌺", "🍌"]
},
{
    name: "Raksha Bandhan",
    emoji: "🧵",
    start: new Date(2026, 7, 28),
    end: new Date(2026, 7, 29),
    colors: ["#FF69B4", "#FFD700"],
    particles: ["🧵", "💝", "🎁", "💫"]
},
{
    name: "Janmashtami",
    emoji: "🦚",
    start: new Date(2026, 8, 4),
    end: new Date(2026, 8, 5),
    colors: ["#0000CD", "#FFD700"],
    particles: ["🦚", "🎶", "🪈", "🧈"]
},

// 👩‍🏫 TEACHERS' DAY — Sep 5
{
    name: "Teachers' Day",
    emoji: "👩‍🏫",
    start: new Date(2026, 8, 5),
    end: new Date(2026, 8, 5),
    colors: ["#4169E1", "#FFD700"],
    particles: ["👩‍🏫", "📚", "✏️", "🍎"]
},
{
    name: "Ganesh Chaturthi",
    emoji: "🐘",
    start: new Date(2026, 8, 14),
    end: new Date(2026, 8, 24),
    colors: ["#FF6600", "#FFD700"],
    particles: ["🐘", "🌺", "🍮", "🎶"]
},
{
    name: "Gandhi Jayanti",
    emoji: "🕊️",
    start: new Date(2026, 9, 2),
    end: new Date(2026, 9, 2),
    colors: ["#FFFFFF", "#138808"],
    particles: ["🕊️", "🇮🇳", "🌿", "📿"]
},
{
    name: "Navratri / Durga Puja",
    emoji: "🪷",
    start: new Date(2026, 9, 11),
    end: new Date(2026, 9, 20),
    colors: ["#FF0000", "#FFD700"],
    particles: ["🪷", "💃", "🔱", "🌺"]
},
{
    name: "Dussehra",
    emoji: "🏹",
    start: new Date(2026, 9, 20),
    end: new Date(2026, 9, 21),
    colors: ["#FF4500", "#FFD700"],
    particles: ["🏹", "🔥", "🌾", "🥁"]
},

// 🌍 HALLOWEEN — Oct 31
{
    name: "Halloween",
    emoji: "🎃",
    start: new Date(2026, 9, 31),
    end: new Date(2026, 9, 31),
    colors: ["#FF6600", "#000000"],
    particles: ["🎃", "👻", "🕷️", "🦇"]
},
{
    name: "Karva Chauth",
    emoji: "🌕",
    start: new Date(2026, 9, 29),
    end: new Date(2026, 9, 30),
    colors: ["#FF1493", "#FFD700"],
    particles: ["🌕", "🧵", "🪔", "💫"]
},
{
    name: "Dhanteras",
    emoji: "🪙",
    start: new Date(2026, 10, 6),
    end: new Date(2026, 10, 7),
    colors: ["#FFD700", "#FFA500"],
    particles: ["🪙", "💰", "🛒", "✨"]
},
{
    name: "Diwali",
    emoji: "🪔",
    start: new Date(2026, 10, 8),
    end: new Date(2026, 10, 11),
    colors: ["#FFD700", "#FFA500"],
    particles: ["🪔", "🎆", "💥", "💰"]
},
{
    name: "Bhai Dooj",
    emoji: "👫",
    start: new Date(2026, 10, 12),
    end: new Date(2026, 10, 13),
    colors: ["#FF69B4", "#FFD700"],
    particles: ["👫", "💝", "🪔", "🎁"]
},
{
    name: "Guru Nanak Jayanti",
    emoji: "🙏",
    start: new Date(2026, 10, 5),
    end: new Date(2026, 10, 6),
    colors: ["#FF8C00", "#003087"],
    particles: ["🙏", "☬", "🌟", "🪯"]
},

// 👨‍👩‍👧 CHILDREN'S DAY — Nov 14
{
    name: "Children's Day",
    emoji: "🧒",
    start: new Date(2026, 10, 14),
    end: new Date(2026, 10, 14),
    colors: ["#FF6347", "#FFD700", "#87CEEB"],
    particles: ["🧒", "🎈", "🎠", "🍭"]
},

// 🎄 CHRISTMAS SEASON
{
    name: "Christmas",
    emoji: "🎄",
    start: new Date(2026, 11, 24),
    end: new Date(2026, 11, 26),
    colors: ["#228B22", "#DC143C"],
    particles: ["🎄", "🎅", "🦌", "❄️"]
},
{
    name: "New Year's Eve",
    emoji: "🥂",
    start: new Date(2026, 11, 30),
    end: new Date(2026, 11, 31),
    colors: ["#FFD700", "#C0C0C0"],
    particles: ["🥂", "🎊", "🎆", "⭐"]
}
];

// Determine Current Festival
function getCurrentFestival() {
    const now = new Date();
    for (let festival of festivals) {
        if (now >= festival.start && now <= festival.end) {
            return festival;
        }
    }
    return null;
}

// Initialize Festival Popup
// Festival configuration with dates
const festival = [
    // Valentine's Week
    { name: "Rose Day", emoji: "🌹", start: new Date(2026, 1, 7), end: new Date(2026, 1, 7) },
    { name: "Propose Day", emoji: "💍", start: new Date(2026, 1, 8), end: new Date(2026, 1, 8) },
    { name: "Chocolate Day", emoji: "🍫", start: new Date(2026, 1, 9), end: new Date(2026, 1, 9) },
    { name: "Teddy Day", emoji: "🧸", start: new Date(2026, 1, 10), end: new Date(2026, 1, 10) },
    { name: "Promise Day", emoji: "🤝", start: new Date(2026, 1, 11), end: new Date(2026, 1, 11) },
    { name: "Hug Day", emoji: "🤗", start: new Date(2026, 1, 12), end: new Date(2026, 1, 12) },
    { name: "Kiss Day", emoji: "💋", start: new Date(2026, 1, 13), end: new Date(2026, 1, 13) },
    { name: "Valentine's Day", emoji: "❤️", start: new Date(2026, 1, 14), end: new Date(2026, 1, 14) },
    
    // Major Indian Festivals
    { name: "Republic Day", emoji: "🇮🇳", start: new Date(2026, 0, 26), end: new Date(2026, 0, 26) },
    { name: "Holi", emoji: "🎨", start: new Date(2026, 2, 14), end: new Date(2026, 2, 14) },
    { name: "Diwali", emoji: "🪔", start: new Date(2026, 10, 8), end: new Date(2026, 10, 10) },
    { name: "Raksha Bandhan", emoji: "🎀", start: new Date(2026, 7, 9), end: new Date(2026, 7, 9) },
    { name: "Janmashtami", emoji: "🦚", start: new Date(2026, 7, 16), end: new Date(2026, 7, 16) },
    { name: "Ganesh Chaturthi", emoji: "🐘", start: new Date(2026, 8, 2), end: new Date(2026, 8, 11) },
    { name: "Chaitra Navaratri", emoji: "🪷", start: new Date(2026, 2, 19), end: new Date(2026, 2, 28) },
    { name: "Sharad Navaratri", emoji: "🪷", start: new Date(2026, 9, 11), end: new Date(2026, 9, 20) },
    { name: "Dussehra", emoji: "🏹", start: new Date(2026, 9, 22), end: new Date(2026, 9, 22) },
    { name: "Independence Day", emoji: "🇮🇳", start: new Date(2026, 7, 15), end: new Date(2026, 7, 15) },
    
    // International Occasions
    { name: "New Year", emoji: "🎆", start: new Date(2026, 0, 1), end: new Date(2026, 0, 1) },
    { name: "Easter", emoji: "🐰", start: new Date(2026, 3, 5), end: new Date(2026, 3, 5) },
    { name: "Mother's Day", emoji: "👩‍👧", start: new Date(2026, 4, 10), end: new Date(2026, 4, 10) },
    { name: "Father's Day", emoji: "👨‍👧", start: new Date(2026, 5, 21), end: new Date(2026, 5, 21) },
    { name: "Halloween", emoji: "🎃", start: new Date(2026, 9, 31), end: new Date(2026, 9, 31) },
    { name: "Thanksgiving", emoji: "🦃", start: new Date(2026, 10, 26), end: new Date(2026, 10, 26) },
    { name: "Christmas", emoji: "🎄", start: new Date(2026, 11, 24), end: new Date(2026, 11, 26) },
    { name: "New Year's Eve", emoji: "🎊", start: new Date(2026, 11, 31), end: new Date(2026, 11, 31) },
    
    // Other Special Days
    { name: "Women's Day", emoji: "👩", start: new Date(2026, 2, 8), end: new Date(2026, 2, 8) },
    { name: "Earth Day", emoji: "🌍", start: new Date(2026, 3, 22), end: new Date(2026, 3, 22) },
    { name: "World Environment Day", emoji: "🌱", start: new Date(2026, 5, 5), end: new Date(2026, 5, 5) },
    { name: "Friendship Day", emoji: "👫", start: new Date(2026, 7, 2), end: new Date(2026, 7, 2) },
];

function getCurrentFestival() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return festivals.find(festival => {
        const start = new Date(festival.start);
        const end = new Date(festival.end);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        return today >= start && today <= end;
    });
}

function initFestivalPopup() {
    const festival = getCurrentFestival();
    
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('festivalPopupShown');
    
    if (festival && !popupShown) {
        const modal = document.getElementById('festival-popup');
        const title = document.getElementById('modalTitle');
        const emoji = document.getElementById('modalEmoji');
        const date = document.getElementById('modalDate');

        if (modal && title && emoji && date) {
            title.textContent = festival.name + " Theme";
            emoji.textContent = festival.emoji;

            const options = { month: 'short', day: 'numeric' };
            const startDate = festival.start.toLocaleDateString('en-US', options);
            const endDate = festival.end.toLocaleDateString('en-US', options);
            
            // Show single date if start and end are the same
            if (startDate === endDate) {
                date.textContent = startDate;
            } else {
                date.textContent = `${startDate} - ${endDate}`;
            }

            modal.style.display = 'flex';
            
            // Mark popup as shown for this session
            sessionStorage.setItem('festivalPopupShown', 'true');
        }
    }
}

// Close Popup
function closePopup() {
    const modal = document.getElementById('festival-popup');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ── SCROLL EMOJI PARTICLES ──────────────────────────────────────────────────

const defaultParticles = ["🎉", "✨", "🌟", "🎊", "💫", "🎈", "🌈", "🎶"];

let lastScrollY = window.scrollY;
let scrollTimeout = null;
let lastSpawnTime = 0;

function spawnScrollEmoji() {
    const fest = getCurrentFestival();
    const pool = (fest && fest.particles && fest.particles.length) ? fest.particles : defaultParticles;
    const emoji = pool[Math.floor(Math.random() * pool.length)];

    const el = document.createElement('span');
    el.textContent = emoji;
    el.className = 'scroll-emoji-particle';

    // Random position within the visible viewport (fixed coords)
    const spawnX = Math.random() * window.innerWidth;
    const spawnY = Math.random() * window.innerHeight * 0.7 + window.innerHeight * 0.15;
    el.style.left = spawnX + 'px';
    el.style.top  = spawnY + 'px';
    el.style.fontSize = (1.2 + Math.random() * 1.4).toFixed(1) + 'rem';

    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 80;
    el.style.setProperty('--drift', drift + 'px');

    document.body.appendChild(el);

    // Remove after animation completes
    el.addEventListener('animationend', () => el.remove());
}

window.addEventListener('scroll', () => {
    const now = Date.now();
    const dy = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;

    // Throttle: only spawn when scrolled ≥ 40px and at least 120ms have passed
    if (dy < 40 || now - lastSpawnTime < 120) return;
    lastSpawnTime = now;

    // Spawn 1-3 emojis scattered across the viewport
    const count = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < count; i++) {
        setTimeout(() => spawnScrollEmoji(), i * 80);
    }
}, { passive: true });

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFestivalPopup);
} else {
    initFestivalPopup();
}