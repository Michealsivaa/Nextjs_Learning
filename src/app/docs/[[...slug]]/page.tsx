import React from 'react';

export default function Page({ params }: { params: { slug: string[] } }) {
    console.log(params, "params");

    if (params?.slug?.length === 2) {
        return (
            <h1>
                Viewing docs for the {params.slug[0]} and {params.slug[1]}
            </h1>
        );
    } else if(params?.slug?.length === 1){
      return (
        <h1>
          Viewing docs for the {params.slug[1]} and {params.slug[0]}
        </h1>
      )
    }

    return (
        <>
            <div>This is Docs page</div>
            <pre>{JSON.stringify(params.slug, null, 2)}</pre>
        </>
    );
}
