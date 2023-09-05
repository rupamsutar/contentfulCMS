import { createClient } from "contentful";

const client = createClient({
    space: 'iqyg99c3w0mq',
    environment: 'master',
    accessToken: 'SPIurdr7unC6t7m89J_bxyT2mbroAoXdj9wk7fSAJ_w',
    contentType: 'cms projects'
});

client.getEntries({content_type: 'cmsProjects'}).then((res) => {
    console.log(res);
})