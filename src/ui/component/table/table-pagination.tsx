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
    pageChangeHandler(pageSelected);
  };

  return (
    <>
      {totalPage > 1 ? (
        <Stack
          direction="row"
          mt="8"
          justify="flex-end"
          align="center"
          spacing="6"
        >
          <Stack
            direction="row"
            spacing="2"
          >
            <PaginationItem
              key="back"
              isCurrent={false}
              page={0}
              iconInfo={{ icon: <FaBackward />, ariaLabel: 'Previous' }}
              onPageChange={onPrevPage}
              colorScheme={'red'}
              isDisabled={currentPage === 1}
            />
            {pagesArr.map((num) => (
              <PaginationItem
                key={num}
                isCurrent={num === currentPage}
                page={num}
                onPageChange={onPageSelect}
                colorScheme={'red'}
                isDisabled={false}
              />
            ))}
            if (currentPage != totalPage)
            {
              <PaginationItem
                key="next"
                isCurrent={false}
                page={0}
                iconInfo={{ icon: <FaForward />, ariaLabel: 'Previous' }}
                onPageChange={onNextPage}
                colorScheme={'red'}
                isDisabled={currentPage === totalPage}
              />
            }
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default Pagination;
