class Navbar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set keyupEvent(event) {
        this._keyupEvent = event
        this.render()
    }

    get value() {
        return this.querySelector('#search-input').value
    }

    get navlink() {
        return this.querySelectorAll('.nav-link')
    }

    render() {
        this.innerHTML = `
            <style>
            .searchbtn {
                border-radius: 100px;
            }

            .navbar {
                position: relative;
                z-index: 1;
            }
    
            .navbar-brand {
                padding-left: 20px;
                font-size: 30px;
            }
    
            .vertical-line {
                border-left: 3px white solid;
                width: 0px;
                height: 25px;
            }
            </style>
            <!-- navbar -->
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="#" style="color: red; font-weight: 500;">APOLLO</a>
                <hr class="vertical-line">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
        
                <div class="item collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Now Playing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Top Rated</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Popular</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Coming Soon</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="searchbtn form-control mr-sm-2" id="search-input" type="search" placeholder="Search..." aria-label="Search">
                    </form>
                </div>
            </nav>
        `

        this.querySelector('#search-input').addEventListener('keyup', this._keyupEvent)
    }
}

customElements.define('nav-bar', Navbar)