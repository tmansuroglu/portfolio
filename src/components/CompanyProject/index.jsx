/* eslint-disable operator-linebreak */
import { Container } from 'react-bootstrap';
import './index.scss';
import PropTypes from 'prop-types';

const allProjects = [
  {
    companyName: 'Tıkla Gelsin',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Nx', 'TypeScript', 'Jest'],
    responsibilities:
      'Performing code reviews, analyzing tasks and tech requirements, collaborating with frontend developers, closely engaging with designers, product owners, and backend teams, and constructing microfrontends to ensure cohesive development.',
    projects: [{ name: 'Tıkla Gelsin B2B - Not released yet', url: '' }],
  },
  {
    companyName: 'Akinon',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    responsibilities:
      'Collaboratively building and maintaining UI components within cross-functional teams of designers, product owners, Backend, and Frontend developers using Agile methodologies.',
    projects: [
      { name: 'Converse', url: 'https://www.converse.com.tr/' },
      { name: 'Lacoste', url: 'https://www.lacoste.com.tr/' },
      { name: 'Gant', url: 'https://www.gant.com.tr/' },
      { name: 'Fashfed', url: 'https://www.fashfed.com/' },
      { name: 'Flo', url: 'https://www.flo.co.ma/' },
      { name: 'Nautica', url: 'https://www.nautica-tr.com/' },
      { name: 'WMF', url: 'https://www.wmf.com.tr/' },
      { name: 'Tefal', url: 'https://www.tefal.com.tr/' },
      { name: 'SuperStep', url: 'https://www.superstep.com.tr/' },
      { name: 'Rowenta', url: 'https://www.rowenta.com.tr/' },
      { name: 'Atasay', url: 'https://www.atasay.com/' },
      { name: 'The Kooples', url: 'https://www.thekooples.com.tr/' },
      { name: 'Ecrou', url: 'https://www.ecrou.com/' },
    ],
  },
  {
    companyName: 'Smartup Network',
    tech: [],
    responsibilities:
      'Lead and collaborate with frontend developers, working closely with designers, product owners, and backend teams to define tech stack and project requirements, conduct code reviews, support developers, and oversee project delivery and onboarding processes',
    projects: [
      {
        name: 'Inodash',
        url: 'https://smartup.network/products/inodash',
        projectTech: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'Redux',
          'Ant Design',
        ],
      },
      {
        name: 'PriceMatch',
        url: 'https://smartup.network/products/pricematch',
        projectTech: ['JavaScript', 'React', 'React Native', 'Redux'],
      },
      {
        name: 'Widio',
        url: 'https://smartup.network/products/widio',
        projectTech: ['HTML', 'CSS', 'React', 'Redux', 'NextJs'],
      },
      {
        name: 'HobeeMatch',
        url: 'https://smartup.network/products/pricematch',
        projectTech: ['JavaScript', 'React', 'React Native', 'Redux'],
      },
      {
        name: 'Bizim Tarifler',
        url: 'https://smartup.network/products/bizimtarifler',
        projectTech: ['HTML', 'CSS', 'JavaScript', 'Vue', 'NuxtJs'],
      },
      {
        name: 'Staalx',
        url: 'https://smartup.network/products/staalx',
        projectTech: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
];

const Project = ({ companyName, tech, responsibilities, projects }) => (
  <div className="mb-4">
    <h6>Company: {companyName}</h6>
    {tech.length > 0 && <h6>Tech: {tech.join(', ')}</h6>}
    <h6>Responsibilities: {responsibilities}</h6>
    {projects.length > 0 &&
      projects.map(({ name, url, projectTech }) => (
        <div key={`${name}-${url}`}>
          {url ? (
            <a href={url || ''} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
          {projectTech?.length > 0 && (
            <small> - {projectTech.join(', ')}</small>
          )}
        </div>
      ))}
  </div>
);

Project.propTypes = {
  companyName: PropTypes.string,
  responsibilities: PropTypes.string,
  tech: PropTypes.arrayOf(PropTypes.string),
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      projectTech: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

Project.defaultProps = {
  companyName: '',
  responsibilities: '',
  tech: [],
  projects: [],
};

function CompanyProject() {
  return (
    <Container>
      <h2 id="projects">Projects</h2>
      {allProjects.map(({ companyName, tech, responsibilities, projects }) => (
        <Project
          companyName={companyName}
          key={`project-${companyName}`}
          tech={tech}
          responsibilities={responsibilities}
          projects={projects}
        />
      ))}
    </Container>
  );
}

export default CompanyProject;
