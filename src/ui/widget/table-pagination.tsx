import { Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { PaginationItem } from './table-pagination-item';

interface PaginationProps {
  pageChangeHandler: (pageNumber: number) => void;
  totalRows: number;
  rowsPerPage: number;
}

const Pagination = ({ pageChangeHandler, totalRows, rowsPerPage }: PaginationProps): React.ReactElement => {
  const pageNumber = Math.ceil(totalRows / rowsPerPage);
  const pagesArr = [...new Array(pageNumber)];
  const [currentPage, setCurrentPage] = useState(1);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  const onNextPage = (): void => {
    setCurrentPage(currentPage + 1);
  };
  const onPrevPage = (): void => {
    setCurrentPage(currentPage - 1);
  };
  const onPageSelect = (pageSelected: number): void => {
    setCurrentPage(pageSelected);
  };

  useEffect(() => {
    if (pageNumber === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [pageNumber, currentPage]);

  useEffect(() => {
    // const skipFactor = (currentPage - 1) * rowsPerPage;
    // Some APIs require skip for paginaiton. If needed use that instead
    // pageChangeHandler(skipFactor);
    pageChangeHandler(currentPage);
  }, [currentPage]);

  return (
    <>
      {pageNumber > 1 ? (
        <Stack direction="row" mt="8" justify="flex-end" align="center" spacing="6">
          <Stack direction="row" spacing="4">
            {pagesArr.map((num, index) => (
              <PaginationItem
                key={index}
                isCurrent={index + 1 === currentPage}
                page={index}
                onPageChange={onPageSelect}
                colorScheme={'red'}
              />
            ))}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default Pagination;
