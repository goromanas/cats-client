import { renderIcon } from 'components/Icons'
import { PageArrowContainer, PaginationContainer } from './Table.style'

interface TablePaginationProps {
  count: number
  rowsPerPage: number
  page: number
  onPageChange: (page: number) => void
}

export const TablePagination: React.FC<TablePaginationProps> = ({ page, onPageChange, count, rowsPerPage }) => {
  const handlePreviousPageClick = () => onPageChange(page - 1)
  const handleNextPageClick = () => onPageChange(page + 1)
  const totalPages = Math.floor(count / rowsPerPage)

  const isPreviousDisabled = page === 0
  const isNextDisabled = page === totalPages

  return (
    <PaginationContainer>
      <PageArrowContainer isDisabled={isPreviousDisabled} onClick={handlePreviousPageClick}>
        {renderIcon('arrowLeft')}
      </PageArrowContainer>
      {`${page + 1}/${totalPages + 1}`}
      <PageArrowContainer isDisabled={isNextDisabled} onClick={handleNextPageClick}>
        {renderIcon('arrowRight')}
      </PageArrowContainer>
    </PaginationContainer>
  )
}
