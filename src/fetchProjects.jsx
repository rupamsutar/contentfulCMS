import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'iqyg99c3w0mq',
    environment: 'master',
    accessToken: 'SPIurdr7unC6t7m89J_bxyT2mbroAoXdj9wk7fSAJ_w',
    contentType: 'cms projects'
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async () => {

        try {
            const response = await client.getEntries({ content_type: 'cmsProjects' });
            const projects = response.items.map((item) => {
                const { title, url, image } = item.fields;
                const id = item.sys.id;
                const img = image?.fields?.file?.url;

                return { title, url, id, img }
            })
            setProjects(projects);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return {loading, projects}
}