import { Button, type ThemeTypings, IconButton } from '@chakra-ui/react';

interface IconButtonProps {
  icon: React.ReactElement;
  ariaLabel: string;
}

interface PaginationItemProps {
  isCurrent: boolean;
  page: number;
  iconInfo?: IconButtonProps;
  onPageChange: (page: number) => void;
  colorScheme: ThemeTypings['colorSchemes'];
  isDisabled: boolean;
}

const PaginationItem = ({
  isCurrent = false,
  page,
  iconInfo,
  onPageChange,
  colorScheme,
  isDisabled,
}: PaginationItemProps): React.ReactElement => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme={colorScheme}
        disabled={isDisabled}
        _disabled={{
          bg: `${colorScheme}.500`,
          cursor: 'pointer',
        }}
      >
        {page}
      </Button>
    );
  }

  if (iconInfo !== undefined) {
    return (
      <IconButton
        aria-label={iconInfo.ariaLabel}
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.100"
        _hover={{
          bg: 'gray.300',
        }}
        icon={iconInfo.icon}
        onClick={() => {
          onPageChange(page);
        }}
      />
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.100"
      _hover={{
        bg: 'gray.300',
      }}
      onClick={() => {
        onPageChange(page);
      }}
    >
      {page}
    </Button>
  );
};

export { PaginationItem };
