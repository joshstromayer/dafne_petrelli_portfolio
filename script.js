/* ═══════════════════════════════════════════════════
   DAFNE PETRELLI — PORTFOLIO SCRIPT
   Layer 0 → mindmap, 5 main nodes orbiting centre
   Layer 1 → click Projects: it stays put, 3 children
             bloom out from it. Other nodes fade out.
   Layer 2 → content screen (cards)
   ═══════════════════════════════════════════════════ */

// ── DATA ─────────────────────────────────────────────

const DATA = {
  root: { id: 'root', label: 'Dafne', sub: 'Portfolio' },

  nodes: [
    {
      id: 'projects',
      label: 'Projects',
      eyebrow: '// Projects',
      children: [
        {
          id: 'physics-lab',
          label: 'Physics & Lab',
          sub: 'Experiments',
          eyebrow: '// Physics & Lab Work',
          title: 'Physics & Lab Projects',
          subtitle: 'Computational and experimental physics — from classical mechanics to particle detection.',
          cards: [
            {
              type: 'physics',
              meta: 'Computational Physics · Python 3',
              title: '2D Classical Helium Atom',
              body: 'Modelled a two-dimensional classical Helium atom to study how initial conditions affect the system — including chaotic transients and autoionisation. Built and animated the model from scratch using robust, flexible functions.',
              tags: ['Classical Mechanics', 'Chaos Theory', 'Python', 'ODE Solving'],
              hasImg: true,
            },
            {
              type: 'physics',
              meta: 'Lab · 2025 - 2026',
              title: 'Portable cheap sexy spectrometer fr',
              body: 'Just the goat ibsr',
              tags: ['[Aura]', '[Farming]'],
              hasImg: true,
            },
            {
              type: 'physics',
              meta: '[Type · Year]',
              title: '[Another Physics Project]',
              body: '[Add another physics project here — could be from any year of your degree, a group lab, a dissertation chapter, etc.]',
              tags: ['[Tag]', '[Tag]'],
              hasImg: true,
            },
          ],
        },
        {
          id: 'ml',
          label: 'Machine Learning',
          sub: 'Data Science',
          eyebrow: '// ML & Data Science',
          title: 'Machine Learning Projects',
          subtitle: 'Classification, dimensionality reduction, symbolic regression — applied to real physics datasets.',
          cards: [
            {
              type: 'code',
              lang: 'Python 3',
              meta: 'Supervised + Unsupervised ML · CERN CMS Data',
              title: 'Higgs Boson Classification',
              body: 'Explored simulated proton-proton collision data to distinguish Higgs boson decay from QCD multi-jet backgrounds. Used PCA for dimensionality reduction, then Naïve Bayes, LDA, and Logistic Regression.',
              snippet: 'sklearn.decomposition.PCA\nsklearn.naive_bayes.GaussianNB\nsklearn.discriminant_analysis.LDA\nsklearn.linear_model.LogisticRegression',
              tags: ['PCA', 'Classification', 'ROC Curves', 'CERN', 'Particle Physics'],
            },
            {
              type: 'code',
              lang: 'Python 3',
              meta: 'Supervised ML · Astrophysics',
              title: 'Pulsar vs Non-Pulsar Classification',
              body: 'Tackled a large, highly imbalanced astrophysical dataset. Compared NB, LDA, and Logistic Regression to identify pulsars. Evaluated through confusion matrices and ROC curves.',
              snippet: '# Imbalanced dataset handling\nsklearn.metrics.classification_report\nsklearn.metrics.roc_auc_score\nmatplotlib — confusion matrix',
              tags: ['Imbalanced Data', 'LDA', 'Naïve Bayes', 'Astrophysics'],
            },
            {
              type: 'code',
              lang: 'Python 3',
              meta: '[ML Project · Year]',
              title: '[Another ML / Data Science Project]',
              body: "[Add more ML or data science work here — models, analyses, kaggle competitions, anything you've built.]",
              snippet: '[libraries / methods used]',
              tags: ['[Tag]', '[Tag]'],
            },
          ],
        },
        {
          id: 'coding',
          label: 'Coding',
          sub: 'Pure code',
          eyebrow: '// Coding Projects',
          title: 'Coding Projects',
          subtitle: 'Scripts, tools, algorithms, and experiments — things built for the love of building.',
          cards: [
            {
              type: 'code',
              lang: '[Language]',
              meta: '[Type · Year]',
              title: '[Personal / Side Project]',
              body: "[Add a personal coding project — a tool, visualisation, game, scraper, API, or anything you've built outside coursework.]",
              snippet: '[snippet or library names]',
              tags: ['[Tag]', '[GitHub?]'],
            },
            {
              type: 'code',
              lang: '[Language]',
              meta: '[Type · Year]',
              title: '[Another Coding Project]',
              body: "[Add another project here. Could be an automation, a web app, a simulation, or anything you're proud of coding.]",
              snippet: '[snippet or library names]',
              tags: ['[Tag]', '[Tag]'],
            },
            {
              type: 'code',
              lang: '[Language]',
              meta: '[Type · Year]',
              title: '[Another Coding Project]',
              body: '[Keep adding — you have loads of projects!]',
              snippet: '[snippet]',
              tags: ['[Tag]'],
            },
          ],
        },
      ],
    },

    {
      id: 'research',
      label: 'Research',
      eyebrow: '// Research',
      title: 'Research',
      subtitle: 'Academic placements, papers, and collaborations.',
      cards: [
        {
          type: 'research',
          meta: 'June – August 2025 · QMUL',
          title: 'ML on Early Universe Inflation',
          body: 'Reconstructed inflationary potentials using genetic programming — genetic algorithms and symbolic regression — connecting ML outputs to physical cosmological observables: number of e-folds (N), spectral index (nₛ), and tensor-to-scalar ratio (r).',
          tags: ['Symbolic Regression', 'Genetic Algorithms', 'Inflationary Cosmology', 'Slow-Roll Models'],
          hasImg: true,
        },
        {
          type: 'research',
          meta: '[Date] · [QMUL]',
          title: 'The Eli Paper fr',
          body: '[Describe this — what question does it address, what methods, what you found or contributed. Dissertation chapters count!]',
          tags: ['[Tag]', '[Tag]'],
          hasImg: true,
        },
        {
          type: 'research',
          meta: '[Date] · [Cambridge, QMUL]',
          title: 'The second Eli Paper fr',
          body: '[Add another — a paper, a collaboration, a poster presentation, a group research project, anything academic.]',
          tags: ['[Tag]', '[Tag]'],
          hasImg: true,
        },
        {
          type: 'research',
          meta: '[Date] · [QMUL]',
          title: '[Paper with Prof Drew — if applicable]',
          body: '[Add another — a paper, a collaboration, a poster presentation, a group research project, anything academic.]',
          tags: ['[Tag]', '[Tag]'],
          hasImg: true,
        },
        {
          type: 'research',
          meta: '[Date] · [QMUL]',
          title: 'Paper with Mahat and V (ongoing)',
          body: '[Add another — a paper, a collaboration, a poster presentation, a group research project, anything academic.]',
          tags: ['[Tag]', '[Tag]'],
          hasImg: true,
        },
      ],
    },

    {
      id: 'experience',
      label: 'Experience',
      eyebrow: '// Experience',
      title: 'Work Experience',
      subtitle: 'From museum tours to machine learning — every role has shaped how I think and communicate.',
      cards: [
        {
          type: 'timeline',
          date: 'June 2025 – August 2025',
          org: 'Queen Mary University of London',
          title: 'ML Research Placement — Early Universe Inflation',
          bullets: [
            'Conducted ML research focused on early universe inflation models.',
            'Reconstructed inflationary potentials via genetic programming and symbolic regression.',
            'Designed and tuned evolutionary algorithms; connected outputs to cosmological observables.',
            '[Add any additional details or outcomes here.]',
          ],
          tags: ['Research', 'Machine Learning', 'Cosmology'],
        },
        {
          type: 'timeline',
          date: 'July 2026 – September 2026',
          org: 'SEPnet',
          title: 'Research Placement',
          bullets: [
            'Conducted ML research focused on early universe inflation models.',
            'Reconstructed inflationary potentials via genetic programming and symbolic regression.',
            'Designed and tuned evolutionary algorithms; connected outputs to cosmological observables.',
          ],
          tags: ['Research', 'Machine Learning'],
        },
        {
          type: 'timeline',
          date: 'June 2024 – June 2025',
          org: 'Sherlock Holmes Museum',
          title: 'Visitor Service Assistant',
          bullets: [
            'Delivered engaging tours to diverse audiences, adapting presentation style accordingly.',
            'Collaborated on translations of tour guide materials into Italian and Spanish.',
            'Strengthened teamwork and communication in a customer-facing role.',
          ],
          tags: ['Communication', 'Multilingual', 'Teamwork'],
        },
        {
          type: 'timeline',
          date: '[Date]',
          org: '[Company / Institution]',
          title: '[Another Job]',
          bullets: ['[What did you do? what did you build or achieve?]'],
          tags: ['[Tag]'],
        },
      ],
    },

    {
      id: 'extracurricular',
      label: 'Extra',
      eyebrow: '// Extracurricular',
      title: 'Extracurricular',
      subtitle: 'Societies, leadership, sport, and everything in between.',
      cards: [
        {
          type: 'extra',
          icon: '🌌',
          date: 'Sept 2024 – June 2025',
          title: 'Treasurer — PsiStar Society',
          body: "Managed funds for QMUL's Physics & Astronomy Society. Organised a trip to CERN (Geneva) in December 2024, visiting CMS and ATLAS. Engaged with IOP-affiliated universities to build cross-university networks.",
          tags: ['Leadership', 'Finance', 'CERN', 'Physics Community'],
        },
        {
          type: 'extra',
          icon: '🤝',
          date: 'Sept 2024 – June 2025',
          title: 'Mentor — Buddy Scheme',
          body: 'Provided guidance and support to assigned mentees, helping them navigate university challenges and settle into academic life.',
          tags: ['Mentoring', 'Leadership'],
        },
        {
          type: 'extra',
          icon: '🤝',
          date: 'August 2025 – May 2026',
          title: 'Private Mentor',
          body: 'Provided ongoing one-to-one mentoring support to multiple students, helping them with both academic and personal challenges.',
          tags: ['Mentoring', 'Leadership'],
        },
        {
          type: 'extra',
          icon: '🎓',
          date: 'Sept 2021 – June 2022',
          title: 'Head Girl — Uxbridge High School',
          body: 'Led the student committee, developed charisma and leadership. Hosted fundraising events for local charity, supported Year 6 summer school transitions.',
          tags: ['Leadership', 'Events', 'Fundraising'],
        },
        {
          type: 'extra',
          icon: '⚡',
          date: '[Date]',
          title: 'Electronics',
          body: '[Mention some of the cool things you made here — put a pic of that lil tree you did in the workshop!]',
          tags: ['Electronics', 'Making'],
        },
        {
          type: 'extra',
          icon: '🥋',
          date: '[Date]',
          title: 'Wado-Ryu Karate — Black Belt',
          body: 'Holds a black belt in Wado-Ryu style karate. Discipline, focus, and resilience — all the good stuff.',
          tags: ['Martial Arts', 'Black Belt', 'Discipline'],
        },
        {
          type: 'extra',
          icon: '♟',
          date: 'Ongoing',
          title: 'Chess',
          body: '[Add your chess story — competitive? online? any achievements?]',
          tags: ['Strategy', 'Chess'],
        },
        {
          type: 'extra',
          icon: '📚',
          date: 'Ongoing',
          title: 'Classical Literature',
          body: '[Favourite authors, books in English and Italian, anything personal.]',
          tags: ['Literature', 'Italian', 'Spanish'],
        },
      ],
    },

    {
      id: 'skills',
      label: 'Skills',
      eyebrow: '// Skills',
      title: 'Skills',
      subtitle: 'The toolkit — always growing.',
      skillBlocks: [
        { title: 'Programming',      items: ['Python 3', 'R', 'Julia', 'LaTeX', 'Ruby'] },
        { title: 'Python Libraries', items: ['NumPy · SciPy', 'Pandas', 'Matplotlib · Seaborn', 'Scikit-learn'] },
        { title: 'Machine Learning', items: ['Supervised Classification', 'PCA / Dim. Reduction', 'Genetic Algorithms', 'Symbolic Regression', 'CNNs', 'RNNs'] },
        { title: 'Physics',          items: ['Condensed Matter', 'Particle Physics / CMS', 'Inflationary Cosmology', '[Add more]'] },
        { title: 'Tools',            items: ['Jupyter Notebooks', 'Git / GitHub', 'LaTeX', '[Add more]'] },
        { title: 'Languages',        items: ['Italian — Native', 'English — Fluent', 'Spanish — Fluent'] },
        { title: 'Soft Skills',      items: ['Public Presenting', 'Scientific Writing', 'Team Collaboration', 'Leadership', 'Mentoring'] },
      ],
    },
  ],
};

// ── STATE ─────────────────────────────────────────────

let currentLayer  = 0;
let currentParent = null;
let currentChild  = null;

// ── DOM REFS ──────────────────────────────────────────

const mindmapScreen  = document.getElementById('mindmap-screen');
const contentScreen  = document.getElementById('content-screen');
const heroText       = document.getElementById('hero-text');
const breadcrumb     = document.getElementById('breadcrumb');
const breadcrumbBack = document.getElementById('breadcrumb-back');
const breadcrumbLbl  = document.getElementById('breadcrumb-label');
const mapHint        = document.getElementById('map-hint');
const contentBack    = document.getElementById('content-back');
const contentBackLbl = document.getElementById('content-back-label');
const contentEyebrow = document.getElementById('content-eyebrow');
const contentTitle   = document.getElementById('content-title');
const contentSubtitle= document.getElementById('content-subtitle');
const contentGrid    = document.getElementById('content-grid');

// ── SVG ───────────────────────────────────────────────

const svg = d3.select('#mindmap-svg');
let W = window.innerWidth;
let H = window.innerHeight;
let CX = W / 2;
let CY = H / 2;

// ── FIX: use a single root <g> that we can translate to re-centre the map ──
const mapGroup   = svg.append('g').attr('class', 'map-group');
const linksGroup = mapGroup.append('g').attr('class', 'links-group');
const nodesGroup = mapGroup.append('g').attr('class', 'nodes-group');

// ── GEOMETRY ──────────────────────────────────────────

const NODE_R      = () => Math.min(W, H) * 0.068;
const CHILD_R     = () => Math.min(W, H) * 0.052;
const ORBIT_R     = () => Math.min(W, H) * 0.30;
const CHILD_ORBIT = () => Math.min(W, H) * 0.22;
const DUR = 480;

function placeOnOrbit(nodes, cx, cy, r) {
  return nodes.map((n, i) => {
    const angle = -Math.PI / 2 + (2 * Math.PI * i) / nodes.length;
    return { ...n, x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle), angle };
  });
}

// ── LAYER 0 ───────────────────────────────────────────

function drawLayer0() {
  currentLayer  = 0;
  currentParent = null;
  currentChild  = null;

  // Reset any map translation from layer 1
  mapGroup.transition().duration(DUR).ease(d3.easeCubicInOut)
    .attr('transform', 'translate(0,0)');

  heroText.classList.remove('hidden');
  breadcrumb.classList.add('hidden');
  if (mapHint) mapHint.style.opacity = '1';

  linksGroup.selectAll('*').remove();
  nodesGroup.selectAll('*').remove();

  const nodeR  = NODE_R();
  const orbitR = ORBIT_R();
  const placed = placeOnOrbit(DATA.nodes, CX, CY, orbitR);

  // links
  placed.forEach((n, i) => {
    linksGroup.append('line')
      .attr('class', 'mindmap-link')
      .attr('x1', CX).attr('y1', CY)
      .attr('x2', n.x).attr('y2', n.y)
      .style('opacity', 0)
      .transition().duration(600).delay(80 + i * 55)
      .style('opacity', 1);
  });

  // nodes — store node id as data attribute for reliable identification
  placed.forEach((n, i) => {
    const g = nodesGroup.append('g')
      .attr('class', 'mindmap-node')
      .attr('data-id', n.id)                              // FIX: tag with id
      .attr('transform', `translate(${n.x},${n.y})`)
      .style('cursor', 'pointer')
      .datum({ x: n.x, y: n.y, node: n });

    g.append('circle').attr('class', 'node-bg').attr('r', 0)
      .transition().duration(DUR).delay(100 + i * 70).ease(d3.easeBounceOut)
      .attr('r', nodeR);

    if (n.children) {
      g.append('text').attr('class', 'node-label-top')
        .attr('y', -nodeR - 7).text('● ● ●').style('opacity', 0)
        .transition().delay(360 + i * 70).duration(300).style('opacity', 1);
    }

    g.append('text').attr('class', 'node-label-main').attr('y', -5)
      .text(n.label).style('opacity', 0)
      .transition().delay(280 + i * 70).duration(380).style('opacity', 1);

    g.on('mouseenter', function () { d3.select(this).classed('hovered', true); })
     .on('mouseleave', function () { d3.select(this).classed('hovered', false); })
     .on('click', () => onMainClick(n, n.x, n.y));
  });
}

// ── CLICK HANDLER ─────────────────────────────────────

function onMainClick(node, px, py) {
  currentParent = node;
  if (node.children) {
    zoomInto(node, px, py);
  } else {
    showContent(node);
  }
}

// ── LAYER 1 ───────────────────────────────────────────

function zoomInto(parentNode, px, py) {
  currentLayer = 1;

  heroText.classList.add('hidden');
  breadcrumb.classList.remove('hidden');
  breadcrumbLbl.textContent = 'Back';
  if (mapHint) mapHint.style.opacity = '0';

  const nodeR      = NODE_R();
  const childR     = CHILD_R();
  const childOrbit = CHILD_ORBIT();

  // Re-centre: translate the whole map so the parent sits at screen centre
  const offsetX = CX - px;
  const offsetY = CY - py;
  mapGroup.transition().duration(DUR).ease(d3.easeCubicInOut)
    .attr('transform', `translate(${offsetX},${offsetY})`);

  // Fade out siblings; keep parent by id
  nodesGroup.selectAll('.mindmap-node').each(function () {
    const el = d3.select(this);
    const isParent = el.attr('data-id') === parentNode.id;
    if (!isParent) {
      el.style('pointer-events', 'none')
        .transition().duration(300)
        .style('opacity', 0)
        .on('end', function () { d3.select(this).remove(); });
    } else {
      el.select('circle.node-bg')
        .transition().duration(DUR).ease(d3.easeCubicInOut)
        .attr('r', nodeR * 1.18);
      el.select('text.node-label-top').remove();
      el.style('pointer-events', 'none');
    }
  });

  linksGroup.selectAll('.mindmap-link')
    .transition().duration(250)
    .style('opacity', 0)
    .on('end', function () { d3.select(this).remove(); });

  setTimeout(() => {
    const count = parentNode.children.length;

    // Fan away from screen centre — same as original.
    // Since the map is translated so px,py → CX,CY, we fan from CX,CY.
    // The away-angle is computed from the ORIGINAL px,py vs screen centre
    // so it still points in the right direction.
    const awayAngle = Math.atan2(py - CY, px - CX);
    const fanSpread = Math.PI * 0.80;
    const startAng  = awayAngle - fanSpread / 2;

    const childPlaced = parentNode.children.map((c, i) => {
      const angle = count === 1
        ? awayAngle
        : startAng + (fanSpread / (count - 1)) * i;
      // Place relative to CX,CY — the parent's visual position after translation
      return { ...c, x: CX + childOrbit * Math.cos(angle), y: CY + childOrbit * Math.sin(angle) };
    });

    childPlaced.forEach(c => {
      linksGroup.append('line')
        .attr('class', 'mindmap-link child-link')
        .attr('x1', CX).attr('y1', CY)
        .attr('x2', CX).attr('y2', CY)
        .style('opacity', 0)
        .transition().duration(DUR).ease(d3.easeCubicOut)
        .attr('x2', c.x).attr('y2', c.y)
        .style('opacity', 1);
    });

    childPlaced.forEach((c, i) => {
      const g = nodesGroup.append('g')
        .attr('class', 'mindmap-node child-node')
        .attr('data-id', c.id)
        .attr('transform', `translate(${CX},${CY})`)
        .datum({ x: c.x, y: c.y, node: c })
        .style('opacity', 0)
        .style('cursor', 'pointer');

      g.append('circle').attr('class', 'node-bg').attr('r', childR * 0.15);
      g.append('text').attr('class', 'node-label-main').attr('y', -4)
        .text(c.label).style('opacity', 0);
      g.append('text').attr('class', 'node-label-sub').attr('y', 13)
        .text(c.sub || '').style('opacity', 0);

      g.transition().duration(DUR).delay(i * 75).ease(d3.easeCubicOut)
        .attr('transform', `translate(${c.x},${c.y})`)
        .style('opacity', 1);
      g.select('circle.node-bg')
        .transition().duration(DUR).delay(i * 75).ease(d3.easeBounceOut)
        .attr('r', childR);
      g.selectAll('text')
        .transition().duration(260).delay(DUR * 0.55 + i * 75)
        .style('opacity', 1);

      g.on('mouseenter', function () { d3.select(this).classed('hovered', true); })
       .on('mouseleave', function () { d3.select(this).classed('hovered', false); })
       .on('click', () => { currentChild = c; showContent(c); });
    });

  }, 310);
}
// ── CONTENT SCREEN ────────────────────────────────────

function showContent(node) {
  contentEyebrow.textContent  = node.eyebrow  || '';
  contentTitle.textContent    = node.title     || node.label;
  contentSubtitle.textContent = node.subtitle  || '';
  contentBackLbl.textContent  = currentParent?.children ? `← ${currentParent.label}` : '← Back';

  contentGrid.innerHTML = '';
  contentGrid.className = 'content-grid';

  if (node.skillBlocks) {
    contentGrid.style.display = 'none';
    const old = document.getElementById('skills-grid-container');
    if (old) old.remove();
    const skillsDiv = document.createElement('div');
    skillsDiv.id = 'skills-grid-container';
    skillsDiv.className = 'skills-grid';
    node.skillBlocks.forEach((block, i) => {
      const b = document.createElement('div');
      b.className = 'skill-block';
      b.style.animationDelay = `${i * 60}ms`;
      b.innerHTML = `<p class="skill-block-title">${block.title}</p>
        <ul class="skill-list">${block.items.map(item => `<li>${item}</li>`).join('')}</ul>`;
      skillsDiv.appendChild(b);
    });
    contentScreen.appendChild(skillsDiv);
  } else {
    const old = document.getElementById('skills-grid-container');
    if (old) old.remove();
    contentGrid.style.display = '';
    (node.cards || []).forEach((card, i) => contentGrid.appendChild(buildCard(card, i)));
  }

  mindmapScreen.classList.remove('active');
  contentScreen.classList.add('active');
  contentScreen.scrollTop = 0;
}

// ── BUILD CARD ────────────────────────────────────────

function buildCard(card, index) {
  const div = document.createElement('div');
  div.className = 'card';
  div.style.animationDelay = `${index * 80}ms`;

  if (card.type === 'code') {
    div.classList.add('dark');
    div.innerHTML = `
      <div class="card-code-header">
        <div class="code-dots"><span></span><span></span><span></span></div>
        <span class="card-lang">${card.lang || 'Python'}</span>
      </div>
      <div class="card-body">
        <p class="card-meta">${card.meta || ''}</p>
        <h3>${card.title}</h3>
        <p>${card.body}</p>
        ${card.snippet ? `<div class="code-snippet">${card.snippet.replace(/\n/g, '<br/>')}</div>` : ''}
      </div>
      <div class="card-tags">${(card.tags||[]).map(t=>`<span class="tag dark-tag">${t}</span>`).join('')}</div>`;

  } else if (card.type === 'timeline') {
    div.classList.add('timeline');
    div.innerHTML = `
      <div class="card-body">
        <p class="timeline-date">${card.date}</p>
        <p class="timeline-org">${card.org}</p>
        <h3>${card.title}</h3>
        ${card.bullets
          ? `<ul class="timeline-bullets">${card.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`
          : `<p>${card.body||''}</p>`}
      </div>
      <div class="card-tags">${(card.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;

  } else if (card.type === 'extra') {
    div.classList.add('extra');
    div.innerHTML = `
      <div class="card-body">
        <span class="extra-icon">${card.icon||'✦'}</span>
        <p class="card-meta"><span class="dot"></span>${card.date||''}</p>
        <h3>${card.title}</h3>
        <p>${card.body}</p>
      </div>
      <div class="card-tags">${(card.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;

  } else {
    div.innerHTML = `
      ${card.hasImg ? `<div class="card-img"><span>Add figure / plot here</span></div>` : ''}
      <div class="card-body">
        <p class="card-meta"><span class="dot"></span>${card.meta||''}</p>
        <h3>${card.title}</h3>
        <p>${card.body}</p>
      </div>
      <div class="card-tags">${(card.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
  }

  return div;
}

// ── BACK NAV ──────────────────────────────────────────

contentBack.addEventListener('click', () => {
  contentScreen.classList.remove('active');
  mindmapScreen.classList.add('active');
  const old = document.getElementById('skills-grid-container');
  if (old) old.remove();
  contentGrid.style.display = '';

  if (currentParent?.children) {
    // Came from a child node (layer 1) — go back to layer 1, not layer 0.
    const orbitR    = ORBIT_R();
    const placed    = placeOnOrbit(DATA.nodes, CX, CY, orbitR);
    const parentPos = placed.find(p => p.id === currentParent.id);
    if (parentPos) {
      // Wipe SVG and reset translation, then seed the parent node and zoom in.
      linksGroup.selectAll('*').remove();
      nodesGroup.selectAll('*').remove();
      mapGroup.interrupt().attr('transform', 'translate(0,0)');

      // Seed just the parent node so zoomInto can find it by data-id
      const nodeR = NODE_R();
      const g = nodesGroup.append('g')
        .attr('class', 'mindmap-node')
        .attr('data-id', currentParent.id)
        .attr('transform', `translate(${parentPos.x},${parentPos.y})`)
        .style('cursor', 'default')
        .datum({ x: parentPos.x, y: parentPos.y, node: currentParent });

      g.append('circle').attr('class', 'node-bg').attr('r', nodeR);
      g.append('text').attr('class', 'node-label-main').attr('y', -5)
        .text(currentParent.label);

      // zoomInto sees only the one parent node, so no siblings get faded — just children bloom
      zoomInto(currentParent, parentPos.x, parentPos.y);
    }
  } else {
    drawLayer0();
  }
});

breadcrumbBack.addEventListener('click', () => {
  drawLayer0();
});

// ── RESIZE ────────────────────────────────────────────

window.addEventListener('resize', () => {
  W  = window.innerWidth;
  H  = window.innerHeight;
  CX = W / 2;
  CY = H / 2;
  if (contentScreen.classList.contains('active')) return;
  if (currentLayer === 0) {
    drawLayer0();
  } else {
    const orbitR    = ORBIT_R();
    const placed    = placeOnOrbit(DATA.nodes, CX, CY, orbitR);
    const parentPos = placed.find(p => p.id === currentParent?.id);
    linksGroup.selectAll('*').remove();
    nodesGroup.selectAll('*').remove();
    mapGroup.attr('transform', 'translate(0,0)');
    drawLayer0();
    if (parentPos) setTimeout(() => zoomInto(currentParent, parentPos.x, parentPos.y), 50);
  }
});

// ── INIT ──────────────────────────────────────────────

drawLayer0();
