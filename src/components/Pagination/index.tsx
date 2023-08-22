import React from 'react';
import { CaretIcon } from '../../icons';

import './index.scss';

interface Props {
    pages: number;
    page: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ pages, page, onPageChange }: Props) => {
    const isPageFirst = page === 1;
    const isPageLast = page === pages;

    if (pages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            {!isPageFirst && (
                <button onClick={() => onPageChange(page - 1)} className="pagination__caret">
                    <CaretIcon />
                </button>
            )}
            {Array.from({ length: pages }, (_, i) => (
                <button
                    key={`page-link-${i + 1}`}
                    className={`pagination__btn ${page === i + 1 ? 'pagination__btn--active' : ''}`}
                    onClick={() => {
                        if (i + 1 !== page) {
                            onPageChange(i + 1);
                        }
                    }}
                >
                    {i + 1}
                </button>
            ))}
            {!isPageLast && (
                <button onClick={() => onPageChange(page + 1)} className="pagination__caret">
                    <CaretIcon />
                </button>
            )}
        </div>
    );
};

export default Pagination;
