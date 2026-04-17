/* Shared nav + footer rendered via JS so the site is easy to maintain
   without a build step. Each page calls Uncommons.render('nav-name') + footer. */

(function(){
  const NAV = [
    { href: 'index.html',    label: 'Overview',   key: 'home' },
    { href: 'method.html',   label: 'Method',     key: 'method' },
    { href: 'papers.html',   label: 'Papers',     key: 'papers' },
    { href: 'project.html',  label: 'Project',    key: 'project' },
    { href: 'members.html',  label: 'Members',    key: 'members' },
    { href: 'about.html',    label: 'About',      key: 'about' },
    { href: 'support.html',  label: 'Support',    key: 'support' },
    { href: 'join.html',     label: 'Join',       key: 'join' }
  ];

  function renderNav(active){
    const links = NAV.map(n =>
      `<li><a href="${n.href}" class="${n.key===active?'active':''}">${n.label}</a></li>`
    ).join('');
    return `
      <nav class="site-nav">
        <div class="nav-inner">
          <a class="nav-logo" href="index.html">
            <span class="mark">Est. 2026</span>
            Uncommons Collective
          </a>
          <ul class="nav-links">${links}</ul>
          <a class="nav-lang" href="#" aria-label="Switch language">EN · 中</a>
        </div>
      </nav>`;
  }

  function renderFooter(){
    return `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="footer-brand">Uncommons Collective</div>
              <p class="footer-tagline">
                A networked research collective for producing public-facing thought
                and applied research on emerging internet institutions.
              </p>
            </div>
            <div class="footer-col">
              <h4>Research</h4>
              <ul>
                <li><a href="papers.html">Papers</a></li>
                <li><a href="method.html">Method</a></li>
                <li><a href="papers.html#theses">Theses</a></li>
                <li><a href="papers.html#archive">Archive</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Collective</h4>
              <ul>
                <li><a href="members.html">Members</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="about.html#funding">Funding</a></li>
                <li><a href="about.html#governance">Governance</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Academic Partners</h4>
              <ul>
                <li><a href="about.html#partners">HK Metropolitan University</a></li>
                <li><a href="about.html#partners">China Academy of Art</a></li>
                <li><a href="about.html#partners">Fudan University</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="join.html">Apply</a></li>
                <li><a href="mailto:hello@uncommons.xyz">hello@uncommons.xyz</a></li>
                <li><a href="#">Mirror</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Uncommons Collective · CC BY-NC-SA 4.0</span>
            <span>v1.0 · Last updated April 2026</span>
          </div>
        </div>
      </footer>`;
  }

  function mountReveal(){
    const io = new IntersectionObserver(
      (es) => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  window.Uncommons = {
    render(activeKey){
      const navMount = document.getElementById('nav-mount');
      const footMount = document.getElementById('footer-mount');
      if (navMount) navMount.outerHTML = renderNav(activeKey);
      if (footMount) footMount.outerHTML = renderFooter();
      mountReveal();
    }
  };
})();
