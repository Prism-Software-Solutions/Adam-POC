// export async function getStaticProps() {
//     const res = await
//     fetch("https://jsonplaceholder.typicode.com/posts");
//     const allPostsData = await res.json();
//     return {
//         props: {
//             allPostsData,
//         },
//         revalidate: 30,
//     };
// }

export async function getStaticProps() {
    const res = await
    fetch("https://labs.bible.org/api/?passage=votd");
    const allPostsData = await res.json();
    return {
        props: {
            allPostsData,
        },
        revalidate: 30,
    };
}