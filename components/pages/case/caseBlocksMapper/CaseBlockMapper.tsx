import { ComponentProps, FC } from 'react'

import CaseFirstScreen from '../firstScreen'
import ProjectDefinition from '../projectDefinition/ProjectDefinition'
import projectOutcome from '../projectOutcome'
import Section3 from '../section3'
import ProjectChallenges from '../projectChallenges/ProjectChallenges'
import CaseContactUs from '../contact'
import Section6 from '../section6'
import NextCaseSection from '../nextCase'
import Section7 from '../section7'
import projectWorkflow from '../projectWorkflow'

const blocksMap = {
    section1: CaseFirstScreen,
    section2: ProjectDefinition,
    section3: Section3,
    section4: projectOutcome,
    section5: ProjectChallenges,
    section6: Section6,
    section7: Section7,
    section8: projectWorkflow,
    section9: ProjectDefinition,
    section10: ProjectDefinition,
    section11: ProjectDefinition,
    section12: ProjectDefinition,
    section13: ProjectDefinition,
}

type CaseBlocksMap = typeof blocksMap

type BlocksUnion = keyof typeof blocksMap

type BaseCaseBlock<T extends BlocksUnion> = {
    block: T
    props: ComponentProps<CaseBlocksMap[T]>
}

type FirstScreenBlock = BaseCaseBlock<'firstScreen'>
type CaseInfoBlock = BaseCaseBlock<'caseDefinition'>
type ListOfHighlightsBlock = BaseCaseBlock<'listOfHighlights'>
type CaseServicesListBlock = BaseCaseBlock<'caseServicesList'>
type CaseTitleWithDescriptionBlock = BaseCaseBlock<'caseTitleWithDescription'>
type CaseImageBlock = BaseCaseBlock<'caseImage'>
type CaseStagesBlock = BaseCaseBlock<'caseStages'>
type CaseStepsBlock = BaseCaseBlock<'caseSteps'>
// type CaseContactUsBlock = BaseCaseBlock<'contact'>
type CaseTechnologiesBlock = BaseCaseBlock<'caseTechnologies'>
type CaseHighlightCardsBlock = BaseCaseBlock<'caseHighlightCards'>
type CaseCard = Project

type CaseBlock =
    | FirstScreenBlock
    | CaseInfoBlock
    | ListOfHighlightsBlock
    | CaseServicesListBlock
    | CaseTitleWithDescriptionBlock
    | CaseImageBlock
    | CaseStagesBlock
    | CaseStepsBlock
    // | CaseContactUsBlock
    | CaseTechnologiesBlock
    | CaseHighlightCardsBlock

export type CaseBlocksConfig = CaseBlock[]

export type CaseData = {
    config: CaseBlocksConfig
    card: CaseCard
}

type CaseBlocksMapperProps = {
    config: CaseBlocksConfig
    nextProject: CaseCard
}

const CaseBlocksMapper: FC<CaseBlocksMapperProps> = ({ config, nextProject }) => {
    return (
        <main>
            {config.map(({ block, props }, i) => {
                const Component = blocksMap[block]
                if (!Component) return null

                return <Component key={`${block}${i}`} {...(props as any)} />
            })}
            <CaseContactUs />
            <NextCaseSection caseInfo={nextProject} />
        </main>
    )
}

export default CaseBlocksMapper
