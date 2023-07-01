import Layout from "@/components/layout/layout.component"
import { ProjectType } from "@/components/project-card/project-card.component";
import Title from "@/components/title/title.component";
import Image from "next/image";

type ProjectProps = {
    project: ProjectType
}

type Params = {
    params: {
        id: string
    }
}


export default function Project({ project }: ProjectProps) {

    const staticImageName = 'bg-crown-clothing';

    const { 
        name,
        tools: {all: tools},
        links,
        description
    } = project;

    return(
        <Layout>
            <section className="section ">
                <div className="container h-full max-w-7xl px-4 pt-16">
                    <Title>{name}</Title>
                    <div className="flex flex-col gap-2  md:grid lg:grid-cols-2 gap-x-24 min-h-screen">
                        <div className="relative">
                            <Image 
                                src={`/static/projects/crown-clothing.webp`}
                                fill={true}
                                alt={`${name} project`}
                            />
                        </div>
                        <div className="">
                            <p>{description}</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold my-7" >Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map(el =>
                                    <div key={el} className=" bg-graybg font-medium py-2 px-5 rounded-md">
                                        {el}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold my-7" >Links</h3>
                            <ul className=" list-inside list-disc">
                                <li>
                                    <a href={links.github} target="_blank" aria-label="github link">{links.github}</a>
                                </li>
                                <li>
                                    <a href={links.live} target="_blank" aria-label="live demo">{links.live}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const { projects } = await import("../data/data.json");
    const paths = projects.map(el => {
        return {params: {id: el.id}};
    });
    return { paths, fallback: true }
}

export async function getStaticProps({ params }: Params) {
    const { projects } = await import("../data/data.json");
    const currentProject = projects.find(el => el.id === params.id) 
    return {props: {project: currentProject}};
}