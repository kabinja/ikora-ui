import { Stack } from '@chakra-ui/react';
import { PaginationItem } from './table-pagination-item';
import { FaBackward, FaForward } from 'react-icons/fa';

interface PaginationProps {
  pageChangeHandler: (pageNumber: number) => void;
  currentPage: number;
  totalPage: number;
}

const Pagination = ({ pageChangeHandler, currentPage, totalPage }: PaginationProps): React.ReactElement => {
  const pagesArr = [...new Array(totalPage).keys()].map((x) => x + 1);

  const onNextPage = (): void => {
    pageChangeHandler(currentPage + 1);
  };
  const onPrevPage = (): void => {
    pageChangeHandler(currentPage - 1);
  };
  const onPageSelect = (pageSelected: number): void => {
    console.log('selected page: ' + pageSelected.toString());
    pageChangeHandler(pageSelected);
  };

  return (
    <>
      {totalPage > 1 ? (
        <Stack direction="row" mt="8" justify="flex-end" align="center" spacing="6">
          <Stack direction="row" spacing="2">
            if (currentPage != 1)
            {
              <PaginationItem
                key={1}
                isCurrent={false}
                page={0}
                iconInfo={{ icon: <FaBackward />, ariaLabel: 'Previous' }}
                onPageChange={onPrevPage}
                colorScheme={'red'}
              />
            }
            {pagesArr.map((num) => (
              <PaginationItem
                key={num}
                isCurrent={num === currentPage}
                page={num}
                onPageChange={onPageSelect}
                colorScheme={'red'}
              />
            ))}
            if (currentPage != totalPage)
            {
              <PaginationItem
                key={1}
                isCurrent={false}
                page={0}
                iconInfo={{ icon: <FaForward />, ariaLabel: 'Previous' }}
                onPageChange={onNextPage}
                colorScheme={'red'}
              />
            }
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default Pagination;
