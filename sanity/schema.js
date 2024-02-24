import skill from './schemaTypes/skill'
import social from './schemaTypes/social'
import pageInfo from './schemaTypes/pageInfo'
import experience from './schemaTypes/experience'
import project from './schemaTypes/project'

export const schema = {
  name: "default",
  types: [skill, pageInfo, experience, social, project],
}
