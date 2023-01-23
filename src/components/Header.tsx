

const styles = {
    container: {
        backgroundColor: 'tomato',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        heignt: 80
    }
}

const HeaderComponent = () => {

    return (
        <div style={styles.container}>
            Github Dashboard
        </div>
    )

}

export const Header = HeaderComponent;