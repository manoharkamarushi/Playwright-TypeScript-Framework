import baseProject from '../../test-data/project/project.base.json';

export function createProjectData(overrides?: Partial<typeof baseProject>) {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);

  return {
    ...baseProject,
    projectName: `AutoTest_${timestamp}_${random}`,
    ...overrides
  };
}