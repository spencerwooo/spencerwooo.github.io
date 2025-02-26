document.addEventListener('DOMContentLoaded', function () {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear()

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      title: 'torchattack',
      description:
        '🛡 A curated list of adversarial attacks in PyTorch, with a focus on transferable black-box attacks.',
      repoUrl: 'https://github.com/spencerwooo/torchattack',
      extraUrl: 'http://docs.swo.moe/torchattack/',
      extraUrlText: 'Documentation',
    },
    {
      title: 'mihoro',
      description: 'Mihomo CLI client on Linux. Formerly clashrup.',
      repoUrl: 'https://github.com/spencerwooo/mihoro',
      extraUrl: 'https://github.com/spencerwooo/mihoro/releases/latest',
      extraUrlText: 'Latest version',
    },
    {
      title: 'bitsrun-rs',
      description:
        '🌐 A headless login / logout CLI for gateway (10.0.0.55) at BIT, now in Rust. 北京理工大学 10.0.0.55 校园网登录登出的 Rust 实现',
      repoUrl: 'https://github.com/spencerwooo/bitsrun-rs',
      extraUrl: 'https://github.com/spencerwooo/bitsrun-rs/releases/latest',
      extraUrlText: 'Latest version',
    },
    {
      title: 'torch-featurelayer',
      description:
        '🧠 Useful utility functions and wrappers for hooking onto layers within PyTorch models for feature extraction.',
      repoUrl: 'https://github.com/spencerwooo/torch-featurelayer',
      extraUrl: 'https://pypi.org/project/torch-featurelayer',
      extraUrlText: 'PyPI',
    },
    {
      title: 'BITNP/BIThesis',
      description: '📖 北京理工大学非官方 LaTeX 模板集合，包含本科、研究生毕业设计模板及更多。🎉',
      repoUrl: 'https://github.com/BITNP/BIThesis',
      extraUrl: 'https://bithesis.bitnp.net/',
      extraUrlText: 'Documentation',
    },
    {
      title: 'BITNP/bitsrun',
      description:
        'A headless login / logout script for 10.0.0.55 at BIT. 北京理工大学 10.0.0.55 校园网登录登出的 Python 实现',
      repoUrl: 'https://github.com/BITNP/bitsrun',
      extraUrl: 'https://pypi.org/project/bitsrun',
      extraUrlText: 'PyPI',
    },
  ]

  // Display projects
  displayProjects(projects)

  // Set up search functionality
  const searchInput = document.getElementById('searchInput')
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim()
    const filteredProjects = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm)
    )
    displayProjects(filteredProjects)
  })
})

function displayProjects(projects) {
  const projectsContainer = document.getElementById('projectsContainer')
  projectsContainer.innerHTML = ''

  if (projects.length === 0) {
    projectsContainer.innerHTML = '<p class="no-results">No projects found.</p>'
    return
  }

  projects.forEach((project) => {
    const projectCard = document.createElement('div')
    projectCard.className = 'project-card'

    projectCard.innerHTML = `
      <div class="project-card-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </div>
      <div class="project-card-actions">
        <a href="${project.repoUrl}" target="_blank">
          <i class="fab fa-github"></i> Repository
        </a>
        <a href="${project.extraUrl}" target="_blank">
          <i class="fas fa-external-link-alt"></i> ${project.extraUrlText}
        </a>
      </div>
    `

    projectsContainer.appendChild(projectCard)
  })
}
