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
import Section9 from '../section9'
import Section10 from '../section10'
import Section11 from '../section11'
import Section12 from '../section12'
import { Case } from '@/types/cases'

const blocksMap = {
    section1: CaseFirstScreen,
    section2: ProjectDefinition,
    section3: Section3,
    section4: projectOutcome,
    section5: ProjectChallenges,
    section6: Section6,
    section7: Section7,
    section8: projectWorkflow,
    section9: Section9,
    section10: Section10,
    section11: Section11,
    section12: Section12,
}

type CaseBlocksMap = typeof blocksMap

type BlocksUnion = keyof typeof blocksMap

type BaseCaseBlock<T extends BlocksUnion> = {
    block: T
    props: ComponentProps<CaseBlocksMap[T]>
}

type Section1Block = BaseCaseBlock<'section1'>
type Section2Block = BaseCaseBlock<'section2'>
type Section3Block = BaseCaseBlock<'section3'>
type Section4Block = BaseCaseBlock<'section4'>
type Section5Block = BaseCaseBlock<'section5'>
type Section6Block = BaseCaseBlock<'section6'>
type Section7Block = BaseCaseBlock<'section7'>
type Section8Block = BaseCaseBlock<'section8'>
type Section9Block = BaseCaseBlock<'section9'>
type Section10Block = BaseCaseBlock<'section10'>
type Section11Block = BaseCaseBlock<'section11'>
type Section12Block = BaseCaseBlock<'section12'>
type Section13Block = BaseCaseBlock<'section13'>

type CaseCard = Case

type CaseBlock =
    | Section1Block
    | Section2Block
    | Section3Block
    | Section4Block
    | Section5Block
    | Section6Block
    | Section7Block
    | Section8Block
    | Section9Block
    | Section10Block
    | Section11Block
    | Section12Block
    | Section13Block

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

                return <Component key={`${block}${i}`} {...(props as any)} nextProject={nextProject} />
            })}
            <CaseContactUs />
            <NextCaseSection caseInfo={nextProject} />
        </main>
    )
}

export default CaseBlocksMapper
