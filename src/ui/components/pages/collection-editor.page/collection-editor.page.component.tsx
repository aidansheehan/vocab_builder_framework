type CollectionEditorPageComponentProps = {

    collectionId?: number

}

/**
 * Collection Editor Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <CollectionEditorPageComponent />
 * )
 */
const CollectionEditorPageComponent = (props: CollectionEditorPageComponentProps): JSX.Element => {

    const { collectionId } = props

    return (
        <div>
            I am the Collection Editor.
            {collectionId && collectionId}
        </div>
    )
}

export default CollectionEditorPageComponent