import Image from 'next/image';
import styles from './index.module.css';
import { CodeXmlIcon } from 'lucide-react';

export interface ProjectCardData {
  id: string;
  type: 'project';
  previewImg: string;
  name: string;
  tags: Array<{ name: string; color: string; }>;
  describe: string;
  codeUrl: string;
  demoUrl: string;
}

const ProjectCard = (props: { projectData: ProjectCardData }) => {
  const { projectData } = props;

  const isAllowJump = (url: string) => {
    if (!url) {
      return {};
    }
    return { href: url, target: '_blank' };
  };

  return <>
    <div className={styles['project-card']}>
      <Image
        src={projectData.previewImg}
        width={300}
        height={300}
        alt="blog-preview"
        priority={true}
      />
      <div className={styles.info}>
        <h3 className={styles.name}>
          {projectData.name}
        </h3>
        <div className={styles.tags}>
          {projectData.tags.map(tag => (
            <span key={tag.name} className={styles['tag-wrap']}>
              <span
                className={styles.dot}
                style={{ background: tag.color }}
              ></span>
              <span className={styles.tag}>
                {tag.name}
              </span>
            </span>
          ))}
        </div>
        <div>{projectData.describe}</div>
      </div>
      <div className={styles['operate-btn']}>
        <a className={styles['view-code']} { ...isAllowJump(projectData.codeUrl) }>
          <CodeXmlIcon />
        </a>
        <a className={styles['view-demo']} { ...isAllowJump(projectData.demoUrl) }>
          Live View
        </a>
      </div>
    </div>
  </>;
};

export default ProjectCard;