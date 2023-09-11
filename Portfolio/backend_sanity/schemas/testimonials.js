export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type:'string'
        },
        {
            name: 'company',
            title: 'Company',
            type:'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type:'image',
            options: {
                hotspot: true,
                // hotspot is the featue of sanity that allow user to crop image
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type:'string'
        },
    ]
}