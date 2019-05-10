import React from 'react'
import { withRouter } from 'react-router-dom'
import withAdminPermission from '../HOC/withAdminPermission'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PRODUCTS_QUERY_NAME } from './AdminProducts';

const QUERY_SINGLE_PRODUCT = gql`
  query getSingleProduct($id: Int!) {
    product(id: $id) {
      name
      description
      image
      price
    }
  }
`

const EDIT_PRODUCT_MUTATION = gql`
  mutation editProduct($id: Int, $input: ProductInput) {
    editProduct(id: $id, input: $input) {
      name
    }
  }
`

function EditProduct({ match, history }) {

  function edit(editProduct, refetch) {
    return async e => {
      e.preventDefault()
      const form = e.target
      const input = {
        image: form.image.value,
        name: form.name.value,
        price: parseFloat(form.price.value),
        description: form.description.value
      }
      await editProduct({ variables: { input, id: parseInt(match.params.name) } })
      history.push('/admin/products')
    }
  }

  function update(cache, { data: { editProduct } }) {
    const { products } = cache.readQuery({ query: PRODUCTS_QUERY_NAME })
    cache.writeQuery({ query: PRODUCTS_QUERY_NAME, data: { products: products.concat(editProduct) } })
  }

  return (
    <main>
      <section className="hero is-black is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-white">Edit</h3>
              <p className="subtitle has-text-grey">Edit products as you like</p>
              <div className="box">
                <Query query={QUERY_SINGLE_PRODUCT} variables={{ id: parseInt(match.params.name) }}>
                  {(query) => {
                    if (query.loading) return <p>Loading...</p>
                    return (
                      <Mutation mutation={EDIT_PRODUCT_MUTATION}
                        refetchQueries={[
                          {query: QUERY_SINGLE_PRODUCT, variables: { id: parseInt(match.params.name) }},
                          {query: PRODUCTS_QUERY_NAME}
                        ]}
                      update={update}>
                        {(editProduct) => {
                          return (
                            <form onSubmit={edit(editProduct)}>
                              <div className="field">
                                <div className="control">
                                  <input className="input is-large is-danger" type="text" placeholder="Name" autoFocus=""
                                    defaultValue={query.data.product.name}
                                    name='name'
                                    required />
                                </div>
                              </div>

                              <div className="field">
                                <div className="control">
                                  <input className="input is-large is-danger" type="text" placeholder="Description" autoFocus=""
                                    defaultValue={query.data.product.description}
                                    name='description'
                                    required />
                                </div>
                              </div>

                              <div className="field">
                                <div className="control">
                                  <input className="input is-large is-danger" type="url" placeholder="Img URL"
                                    defaultValue={query.data.product.image}
                                    name='image'
                                    required />
                                </div>
                              </div>

                              <div className="field">
                                <div className="control">
                                  <input className="input is-large is-danger" type="number" placeholder="Price"
                                    defaultValue={query.data.product.price}
                                    name='price'
                                    required />
                                </div>
                              </div>
                              <input className="button is-block is-danger is-large is-fullwidth" type="submit" value="Edit" />
                            </form>
                          )
                        }}
                      </Mutation>
                    )
                  }}
                </Query>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default withAdminPermission(withRouter(EditProduct))
// export default withRouter(EditProduct)
