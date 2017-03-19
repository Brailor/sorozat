<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Shows
 *
 * @ORM\Table(name="shows")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\ShowsRepository")
 */
class Shows
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="themoviedb_id", type="integer", nullable=true)
     */
    private $themoviedbId;

    /**
     * @var string
     *
     * @ORM\Column(name="totalSeasons", type="string", length=10, nullable=true)
     */
    private $totalSeasons;
    
     /**
     * @var string
     *
     * @ORM\Column(name="imdbVotes", type="string", length=255, nullable=true)
     */
    private $imdbVotes;

    /**
     * @var string
     *
     * @ORM\Column(name="Title", type="string", length=255)
     */
    private $title;

    /**
     * @var string
     *
     * @ORM\Column(name="Year", type="string", length=255, nullable=true)
     */
    private $year;

    /**
     * @var string
     *
     * @ORM\Column(name="Released", type="string", length=255, nullable=true)
     */
    private $released;

    /**
     * @var string
     *
     * @ORM\Column(name="Runtime", type="string", length=255, nullable=true)
     */
    private $runtime;

    /**
     * @var string
     *
     * @ORM\Column(name="Genre", type="string", length=255)
     */
    private $genre;

    /**
     * @var string
     *
     * @ORM\Column(name="Writer", type="string", length=255, nullable=true)
     */
    private $writer;

    /**
     * @var string
     *
     * @ORM\Column(name="Actors", type="text", nullable=true)
     */
    private $actors;

    /**
     * @var string
     *
     * @ORM\Column(name="Plot", type="text", nullable=true)
     */
    private $plot;

    /**
     * @var string
     *
     * @ORM\Column(name="Poster", type="text")
     */
    private $poster;

    /**
     * @var string
     *
     * @ORM\Column(name="imdbRating", type="string",length=10, nullable=true)
     */
    private $imdbRating;

    /**
     * @var string
     *
     * @ORM\Column(name="imdbID", type="string", length=25)
     */
    private $imdbID;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set themoviedbId
     *
     * @param integer $themoviedbId
     *
     * @return Shows
     */
    public function setThemoviedbId($themoviedbId)
    {
        $this->themoviedbId = $themoviedbId;

        return $this;
    }

    /**
     * Get themoviedbId
     *
     * @return int
     */
    public function getThemoviedbId()
    {
        return $this->themoviedbId;
    }
        /**
     * Set totalSeasons
     *
     * @param string $totalSeasons
     *
     * @return Shows
     */
    public function setTotalSeasons($totalSeasons)
    {
        $this->totalSeasons = $totalSeasons;

        return $this;
    }

    /**
     * Get totalSeasons
     *
     * @return string
     */
    public function getTotalSeasons()
    {
        return $this->totalSeasons;
    }
    /**
     * Set imdbVotes
     *
     * @param string $imdbVotes
     *
     * @return Shows
     */
    public function setImdbVotes($imdbVotes)
    {
        $this->imdbVotes = $imdbVotes;

        return $this;
    }

    /**
     * Get imdbVotes
     *
     * @return string
     */
    public function getImdbVotes()
    {
        return $this->imdbVotes;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Shows
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set year
     *
     * @param string $year
     *
     * @return Shows
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * Get year
     *
     * @return string
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * Set released
     *
     * @param string $released
     *
     * @return Shows
     */
    public function setReleased($released)
    {
        $this->released = $released;

        return $this;
    }

    /**
     * Get released
     *
     * @return string
     */
    public function getReleased()
    {
        return $this->released;
    }

    /**
     * Set runtime
     *
     * @param string $runtime
     *
     * @return Shows
     */
    public function setRuntime($runtime)
    {
        $this->runtime = $runtime;

        return $this;
    }

    /**
     * Get runtime
     *
     * @return string
     */
    public function getRuntime()
    {
        return $this->runtime;
    }

    /**
     * Set genre
     *
     * @param string $genre
     *
     * @return Shows
     */
    public function setGenre($genre)
    {
        $this->genre = $genre;

        return $this;
    }

    /**
     * Get genre
     *
     * @return string
     */
    public function getGenre()
    {
        return $this->genre;
    }

    /**
     * Set writer
     *
     * @param string $writer
     *
     * @return Shows
     */
    public function setWriter($writer)
    {
        $this->writer = $writer;

        return $this;
    }

    /**
     * Get writer
     *
     * @return string
     */
    public function getWriter()
    {
        return $this->writer;
    }

    /**
     * Set actors
     *
     * @param string $actors
     *
     * @return Shows
     */
    public function setActors($actors)
    {
        $this->actors = $actors;

        return $this;
    }

    /**
     * Get actors
     *
     * @return string
     */
    public function getActors()
    {
        return $this->actors;
    }

    /**
     * Set plot
     *
     * @param string $plot
     *
     * @return Shows
     */
    public function setPlot($plot)
    {
        $this->plot = $plot;

        return $this;
    }

    /**
     * Get plot
     *
     * @return string
     */
    public function getPlot()
    {
        return $this->plot;
    }

    /**
     * Set poster
     *
     * @param string $poster
     *
     * @return Shows
     */
    public function setPoster($poster)
    {
        $this->poster = $poster;

        return $this;
    }

    /**
     * Get poster
     *
     * @return string
     */
    public function getPoster()
    {
        return $this->poster;
    }

    /**
     * Set imdbRating
     *
     * @param string $imdbRating
     *
     * @return Shows
     */
    public function setImdbRating($imdbRating)
    {
        $this->imdbRating = $imdbRating;

        return $this;
    }

    /**
     * Get imdbRating
     *
     * @return float
     */
    public function getImdbRating()
    {
        return $this->imdbRating;
    }
        /**
     * Set imdbID
     *
     * @param string $imdbID
     *
     * @return Shows
     */
    public function setImdbID($imdbID)
    {
        $this->imdbID = $imdbID;

        return $this;
    }

    /**
     * Get imdbID
     *
     * @return string
     */
    public function getImdbId()
    {
        return $this->imdbID;
    }
}

