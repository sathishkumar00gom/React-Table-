import React from 'react'

export default function Pagination({ postsperpage, totalposts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalposts / postsperpage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            {pageNumbers.map((page) =>
                (<li  ><a onClick={() => paginate(page)} href='#'>{page}</a></li>)
            )}
        </nav>
    )
}
