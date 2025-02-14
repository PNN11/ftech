import { ComponentProps, FC } from 'react'

import { TService } from '@/types/common'
import projectChallenges from '../../case/projectChallenges'
import ProjectWorkflow from '../../case/projectWorkflow'
import CaseSection6 from '../../case/section6'
import OurCases from '../../home/ourCases/OurCases'
import ServicesContactUs from '../../services/contactUs/ServicesContactUs'
import ServicesCTASection from '../../services/techStack/ServicesCTASection'
import ServicesTechStack from '../../services/techStack/ServicesTechStack'
import OutsourcingFirstScreen from '../firstScreen/OutsourcingFirstScreen'
import ServiceFirstScreen from '../firstScreen/ServiceFirstScreen'
import ServiceInfo from '../info/ServiceInfo'
import ServiceAdvantages from '../ServiceAdvantages/ServiceAdvantages'

const blocksMap = {
    firstScreen: ServiceFirstScreen,
    serviceInfo: ServiceInfo,
    serviceTechnologies: CaseSection6,
    workflow: ProjectWorkflow,
    cta: ServicesCTASection,
    cases: OurCases,
    techStack: ServicesTechStack,
    outsourcingFirstScreen: OutsourcingFirstScreen,
    serviceAdvantages: ServiceAdvantages,
    serviceSteps: projectChallenges,
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
    | BaseServiceBlock<'techStack'>
    | BaseServiceBlock<'outsourcingFirstScreen'>
    | BaseServiceBlock<'serviceAdvantages'>
    | BaseServiceBlock<'serviceSteps'>

export type ServiceBlocksConfig = ServiceBlock[]

export type ServiceData = {
    service: TService
    contactUsTitle?: string
    config: ServiceBlocksConfig
}

const ServiceBlocksMapper: FC<ServiceData> = ({ config, contactUsTitle }) => {
    return (
        <>
            {config.map(({ block, props }, i) => {
                const Component = blocksMap[block]
                if (!Component) return null

                return <Component key={`${block}${i}`} {...(props as any)} />
            })}
            <ServicesContactUs title={contactUsTitle} />
        </>
    )
}

export default ServiceBlocksMapper
