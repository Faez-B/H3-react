

export const Form = () => {

    function onSubmit (e) {
        e.preventDefault();
    }

    return <>
        <form onSubmit={onSubmit}>
            <input type="text" name="titre" placeholder="Titre" className="form-control my-2" />
            <textarea name="desc" placeholder="Description" className="form-control my-2" cols="30" rows="10"></textarea>

            <div className="form-group text-center my-2">
                <button type="submit" className="btn btn-primary">
                    Enregistrer
                </button>
            </div>
        </form>
    </>
}