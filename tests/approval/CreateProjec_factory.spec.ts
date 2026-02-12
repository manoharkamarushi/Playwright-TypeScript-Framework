import { createProjectData } from '../../utils/factories/ProjectFactory';
import { calculateMargin } from '../../utils/caluculators/revenueCaluculator';
import { test, expect } from '../../fixtures/testFixture';

test('Validate margin calculation @regression @project @US-4501',
async ({ projectPage }) => {

  const projectData = createProjectData({
    revenue: 100000,
    cop: 60000
  });

  await projectPage.createProject(projectData);

  const expectedMargin = calculateMargin(
    projectData.revenue,
    projectData.cop
  );

  const uiMargin = await projectPage.getMarginValue();

  expect(uiMargin).toBe(expectedMargin);
});
