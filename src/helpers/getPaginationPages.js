export default function getPaginationPages(totalPages, quantityFirstPages, quantityLastPages, currentPage = -1) {
  if (typeof totalPages != 'number') return;
  if (totalPages <= 0 || quantityFirstPages <= 0 || quantityLastPages <= 0) return
  if (totalPages < quantityFirstPages + quantityLastPages) return
  const firstPages = []
  const lastPages = []
  const pagesAround = []

  for (let i = 0; i < quantityFirstPages; i++) {
    firstPages.push(i + 1)
  }
  for (let i = 0; i < quantityLastPages; i++) {
    lastPages.unshift(totalPages - i)
  }
  if(currentPage > 1) {
      for(let i = currentPage - 3; i < Number(currentPage) + 4; i++) {
          if(i > 0 && i <= totalPages) {
              pagesAround.push(i)
          }
      }
  }

  return { firstPages, lastPages, pagesAround }
}