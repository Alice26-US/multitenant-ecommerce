import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
    slug: "categories",
    access: {

        create: () => false,
        read: ({ req }) => {
            if (!req.user) return false;
            // Filter categories by user's tenant
            return {
                tenant: {
                    equals: req.user.tenant, // Assuming user has a 'tenant' field
                },
            }
        },
        delete: () => false,
        update: () => false, 
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true,
        },
    ]
};