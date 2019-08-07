import * as fetch from './index';
import * as seedingData from './seedingData';

export const migrateProjects = () => {
    seedingData.projects.forEach(project => {
        fetch.projects.postProject(project)
    });
}