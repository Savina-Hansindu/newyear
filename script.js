const NAKATHA_DATA = [
    {
        id: "snanaya",
        title: "පරණ අවුරුද්ද සඳහා ස්නානය",
        time: "2026-04-13T06:00:00",
        desc: "අප්‍රේල් මස 13 වන සඳුදා දින දිවුල්පත් යුෂ මිශ්ර නානු ගා ස්නානය කොට ඉෂ්ට දේවතා අනුස්මරණයෙහි යෙදී වාසය මැනවි.",
        image: "src/assets/snaanaya.jpeg"
    },
    {
        id: "punya-kalaya",
        title: "පුණ්‍ය කාලය",
        time: "2026-04-14T03:08:00",
        endTime: "2026-04-14T15:56:00",
        desc: "අප්‍රේල් මස 14 වන අඟහරුවාදා පූර්වභාග 03.08 සිට එම දා අපරභාග 03.56 දක්වා පුණ්ය කාලය බැවින් ඊට පළමුව ආහාර පාන ගෙන සියලු වැඩ අතහැර ආගමික වතාවත්වල නිරත වීම මැනවි.",
        image: "hero_bg.png"
    },
    {
        id: "udawa",
        title: "අලූත් අවුරුදු උදාව",
        time: "2026-04-14T09:32:00",
        desc: "අප්‍රේල් මස 14 වන අඟහරුවාදා දින පූර්වභාග 09.32 ට සිංහල අලුත් අවුරුද්ද උදාවෙයි.",
        image: "oil_lamp.png"
    },
    {
        id: "pisima",
        title: "ආහාර පිසීම",
        time: "2026-04-14T10:51:00",
        desc: "අප්‍රේල් මස 14 වන අඟහරුවාදා පූර්වභාග 10.51 ට රක්ත වර්ණ වස්ත්රාභරණයෙන් සැරසී දකුණු දිශාව බලා ලිප් බැඳ ගිනි මොළවා කිරිබතක් ද කැවිලි වර්ගයක් ද පිළියෙල කර ගැනීම මැනවි.",
        image: "src/assets/kiri-ithireema.jpeg  "
    },
    {
        id: "anubhavaya",
        title: "වැඩ ඇල්ලීම, ගණුදෙනු කිරීම හා ආහාර අනුභවය",
        time: "2026-04-14T12:06:00",
        desc: "අප්‍රේල් මස 14 වන අඟහරුවාදා අපරභාග 12.06 ට රක්ත වර්ණ වස්ත්රාභරණයෙන් සැරසී දකුණු දිශාව බලා සියලු වැඩ අල්ලා ගනුදෙනු කොට ආහාර අනුභව කිරීම මැනවි.",
        image: "kiribath_kavili.png"
    },
    {
        id: "hissathel",
        title: "හිසතෙල් ගෑම",
        time: "2026-04-15T06:55:00",
        desc: "අප්‍රේල් මස 15 වන බදාදා පූර්වභාග 6.55 ට පච්ච වර්ණ හෙවත් කොළ පැහැති වස්ත්රාභරණයෙන් සැරසී නැගෙනහිර දිශාව බලා හිසට කොහොඹපත් ද පයට කොළොන් පත් ද තබා තෙල් ගා ස්නානය කිරීම මැනවි.",
        image: "src/assets/hisathel-gaama.webp"
    },
    {
        id: "pitathwa-yama",
        title: "රැකී රක්ෂා සඳහා පිටත්ව යෑම",
        time: "2026-04-20T06:27:00",
        desc: "අප්‍රේල් මස 20 වන සඳුදා පූර්වභාග 06.27 ට හෝ 06.50 ට සුදු වර්ණ වස්ත්රාභරණයෙන් සැරසී දකුණු හෝ නැගෙනහිර දිශාව බලා පිටත්ව යෑම මැනවි.",
        image: "src/assets/raki-raksha.webp"
    },
    {
        id: "situweema",
        title: "පැළ සිටුවීමට",
        time: "2026-04-23T09:01:00",
        desc: "අප්‍රේල් මස 23 වන බ්රහස්පතින්දා පූර්වභාග 09. 01 ට රන්වන් පැහැති වස්ත්රාභරණයෙන් සැරසී උතුරු දිශාව බලා පැළ සිටුවීම මැනවි.",
        image: "src/assets/pala.jpeg"
    }
];

let selectedNakathaId = null;
let isManualSelection = false;

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const dateString = now.toLocaleDateString('si-LK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('current-clock').textContent = timeString;
    document.getElementById('current-date').textContent = dateString;
}

function initTimeline() {
    const slider = document.getElementById('timeline-slider');
    slider.innerHTML = '';

    NAKATHA_DATA.forEach((item) => {
        const date = new Date(item.time);
        const timeStr = date.toLocaleTimeString('si-LK', { hour: '2-digit', minute: '2-digit' });
        const dateStr = date.toLocaleDateString('si-LK', { month: 'long', day: 'numeric' });

        const card = document.createElement('div');
        card.className = `ritual-card ritual-id-${item.id}`;
        card.dataset.id = item.id;
        card.innerHTML = `
            <div class="ritual-time">${dateStr} - ${timeStr}</div>
            <div class="ritual-title">${item.title}</div>
            <p class="ritual-desc">${item.desc.substring(0, 75)}...</p>
            <div class="status-indicator status-upcoming">
                <span class="dot"></span>
                <span class="status-text">ඉදිරියට</span>
            </div>
        `;

        card.addEventListener('click', () => {
            selectedNakathaId = item.id;
            isManualSelection = true;
            updateHeroSection();
            highlightSelectedCard();
            window.scrollTo({
                top: 0,
                behavior: "smooth" // smooth animation
            });
        });

        slider.appendChild(card);
    });
}

function highlightSelectedCard() {
    document.querySelectorAll('.ritual-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.id === selectedNakathaId);
    });
}

function updateHeroSection() {
    const now = new Date();

    if (!selectedNakathaId || !isManualSelection) {
        for (let i = 0; i < NAKATHA_DATA.length; i++) {
            if (new Date(NAKATHA_DATA[i].time) > now) {
                selectedNakathaId = NAKATHA_DATA[i].id;
                break;
            }
        }
    }

    const nextItem = NAKATHA_DATA.find(i => i.id === selectedNakathaId) || NAKATHA_DATA[NAKATHA_DATA.length - 1];

    document.getElementById('next-nakatha-title').textContent = nextItem.title;
    document.getElementById('next-nakatha-desc').textContent = nextItem.desc;
    document.getElementById('next-nakatha-date').textContent = new Date(nextItem.time).toLocaleDateString('si-LK', { weekday: 'long', month: 'long', day: 'numeric' });
    document.getElementById('next-nakatha-time').textContent = new Date(nextItem.time).toLocaleTimeString('si-LK', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('hero-image').src = nextItem.image;

    const targetTime = new Date(nextItem.time);
    let diff = targetTime - now;
    let isStarted = false;

    if (nextItem.endTime) {
        const end = new Date(nextItem.endTime);
        if (now >= targetTime && now <= end) {
            diff = end - now;
            isStarted = true;
            document.querySelector('.next-badge').textContent = "ක්‍රියාත්මකයි";
            document.querySelector('.next-badge').style.background = "#2e7d32";
        } else if (now > end) {
            diff = 0;
            document.querySelector('.next-badge').textContent = "අවසන්";
        } else {
            document.querySelector('.next-badge').textContent = "මීළඟ නැකත";
            document.querySelector('.next-badge').style.background = "#c62828";
        }
    } else {
        if (diff < 0) diff = 0;
        document.querySelector('.next-badge').textContent = diff > 0 ? "මීළඟ නැකත" : "අවසන්";
    }

    const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

    document.getElementById('days').textContent = d.toString().padStart(2, '0');
    document.getElementById('hours').textContent = h.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = s.toString().padStart(2, '0');

    let progress = 0;
    if (isStarted && nextItem.endTime) {
        const start = new Date(nextItem.time);
        const end = new Date(nextItem.endTime);
        progress = ((now - start) / (end - start)) * 100;
    } else {
        const currentIndex = NAKATHA_DATA.findIndex(i => i.id === selectedNakathaId);
        const startTime = currentIndex > 0 ? new Date(NAKATHA_DATA[currentIndex - 1].time) : new Date(targetTime - 24 * 60 * 60 * 1000);
        const total = targetTime - startTime;
        const current = now - startTime;
        progress = (current / total) * 100;
    }
    document.getElementById('hero-progress').style.width = `${Math.min(100, Math.max(0, progress))}%`;

    NAKATHA_DATA.forEach((item) => {
        const card = document.querySelector(`.ritual-id-${item.id}`);
        if (!card) return;

        const indicator = card.querySelector('.status-indicator');
        const statusText = card.querySelector('.status-text');
        const itemTime = new Date(item.time);
        const itemEnd = item.endTime ? new Date(item.endTime) : itemTime;

        if (now > itemEnd) {
            card.classList.add('completed');
            card.classList.remove('active');
            indicator.className = 'status-indicator status-completed';
            statusText.textContent = 'අවසන්';
        } else if (now >= itemTime && now <= itemEnd) {
            card.classList.add('active');
            card.classList.remove('completed');
            indicator.className = 'status-indicator status-active';
            statusText.textContent = 'ක්‍රියාත්මකයි';
        } else {
            card.classList.remove('active', 'completed');
            indicator.className = 'status-indicator status-upcoming';
            statusText.textContent = 'ඉදිරියට';
        }
    });

    if (!isManualSelection) highlightSelectedCard();
}

// Slider Logic with Arrows (FIXED: Target Wrapper)
const sliderWrapper = document.querySelector('.timeline-slider-wrapper');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    sliderWrapper.scrollBy({ left: -350, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    sliderWrapper.scrollBy({ left: 350, behavior: 'smooth' });
});

setInterval(updateClock, 1000);
setInterval(updateHeroSection, 1000);

updateClock();
initTimeline();
updateHeroSection();
highlightSelectedCard();
