import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onChangePageCallBack = vi.fn()

describe('Pagination', () => {
  // reseta o spie(onChangePageCallBack) a cada teste
  beforeEach(() => {
    onChangePageCallBack.mockClear()
  })

  it('shoul display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  it('shoul be able to navigate to the next page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onChangePageCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onChangePageCallBack).toHaveBeenCalledWith(1)
  })

  it('shoul be able to navigate to the previous page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onChangePageCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    const user = userEvent.setup()

    // Verifica a chamada de um evento
    // console.log(onChangePageCallBack.mock.calls)

    await user.click(nextPageButton)

    expect(onChangePageCallBack).toHaveBeenCalledWith(4)
  })

  it('shoul be able to navigate to the first page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onChangePageCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Primeira página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onChangePageCallBack).toHaveBeenCalledWith(0)
  })

  it('shoul be able to navigate to the last page', async () => {
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onChangePageCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    const user = userEvent.setup()

    await user.click(nextPageButton)

    expect(onChangePageCallBack).toHaveBeenCalledWith(19)
  })
})
