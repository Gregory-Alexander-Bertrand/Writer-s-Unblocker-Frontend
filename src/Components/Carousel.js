import React from 'react'

const Carousel = () => {
    return (
        <div className="carousel">
            <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <main id="carousel">
    <div class="item">
        <h3>"One day I will find the right words, and they will be simple."--<span>Jack Kerouac</span></h3>
    </div>
    <div class="item">
        <h3>"You must stay drunk on writing so reality cannot destroy you."--<span>Ray Bradbury</span></h3>
    </div>
    <div class="item">
        <h3>"Always be a poet, even in prose."--<span>Charles Baudelaire</span></h3>
    </div>
    <div class="item">
        <h3>"I write to discover what I know."--<span>Flannery O'Connor</span></h3>
    </div>
    <div class="item">
        <h3>"Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."--<span>John Stienbeck</span></h3>
    </div>
    </main>
        </div>
    )
}

export default Carousel
