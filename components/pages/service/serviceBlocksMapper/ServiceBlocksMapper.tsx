import { ComponentProps, FC } from 'react'

import { Case } from '@/types/cases'

import ServiceFirstScreen from '../firstScreen/ServiceFirstScreen'
import { TService } from '@/types/common'
import ServiceInfo from '../info/ServiceInfo'
import CaseSection6 from '../../case/section6'
import ProjectWorkflow from '../../case/projectWorkflow'
import CTASection from '../../case/projectDefinition/CTASection'
import OurCases from '../../home/ourCases/OurCases'
import ServicesTechStack from '../../services/techStack/ServicesTechStack'

const blocksMap = {
    firstScreen: ServiceFirstScreen,
    serviceInfo: ServiceInfo,
    serviceTechnologies: CaseSection6,
    workflow: ProjectWorkflow,
    cta: CTASection,
    cases: OurCases,
    techStack: ServicesTechStack,
}

type ServiceBlocksMap = typeof blocksMap

type BlocksUnion = keyof typeof blocksMap

type BaseServiceBlock<T extends BlocksUnion> = {
    block: T
    props: ComponentProps<ServiceBlocksMap[T]>
}

type ServiceBlock =
    | BaseServiceBlock<'firstScreen'>
    | BaseServiceBlock<'serviceInfo'>
    | BaseServiceBlock<'serviceTechnologies'>
    | BaseServiceBlock<'workflow'>
    | BaseServiceBlock<'cta'>
    | BaseServiceBlock<'cases'>

export type ServiceBlocksConfig = ServiceBlock[]

export type ServiceData = {
    service: TService
    contactUsTitle?: string
    config: ServiceBlocksConfig
}

type ServiceBlocksMapperProps = {
    config: ServiceBlocksConfig
}

const ServiceBlocksMapper: FC<ServiceBlocksMapperProps> = ({ config }) => {
    return (
        <>
            {config.map(({ block, props }, i) => {
                const Component = blocksMap[block]
                if (!Component) return null

                return <Component key={`${block}${i}`} {...(props as any)} />
            })}
        </>
    )
}

export default ServiceBlocksMapper
