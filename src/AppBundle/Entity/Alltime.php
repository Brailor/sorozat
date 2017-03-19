<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Alltime
 *
 * @ORM\Table(name="alltime")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\AlltimeRepository")
 */
class Alltime
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;
    /**
     * @var string
     *
     * @ORM\Column(name="show_id", type="string", length=255)
     */
    private $show_id;

    /**
     * @var string
     *
     * @ORM\Column(name="category", type="string", length=255)
     */
    private $category;

    /**
     * @var string
     *
     * @ORM\Column(name="poster_pic", type="string", length=255)
     */
    private $posterPic;

    /**
     * @var string
     *
     * @ORM\Column(name="plot", type="string", length=255)
     */
    private $plot;

    /**
     * @var float
     *
     * @ORM\Column(name="rating", type="float")
     */
    private $rating;

    /**
     * @var string
     *
     * @ORM\Column(name="created_at", type="string", length=255)
     */
    private $createdAt;


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
     * Set name
     *
     * @param string $name
     *
     * @return Alltime
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
     /**
     * Set show_id
     *
     * @param string $show_id
     *
     * @return Alltime
     */
    public function setShow_id($show_id)
    {
        $this->show_id = $show_id;

        return $this;
    }
      /**
     * Get show_id
     *
     * @return string
     */
    public function getShow_id()
    {
        return $this->show_id;
    }

    /**
     * Set category
     *
     * @param string $category
     *
     * @return Alltime
     */
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category
     *
     * @return string
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set posterPic
     *
     * @param string $posterPic
     *
     * @return Alltime
     */
    public function setPosterPic($posterPic)
    {
        $this->posterPic = $posterPic;

        return $this;
    }

    /**
     * Get posterPic
     *
     * @return string
     */
    public function getPosterPic()
    {
        return $this->posterPic;
    }

    /**
     * Set plot
     *
     * @param string $plot
     *
     * @return Alltime
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
     * Set rating
     *
     * @param float $rating
     *
     * @return Alltime
     */
    public function setRating($rating)
    {
        $this->rating = $rating;

        return $this;
    }

    /**
     * Get rating
     *
     * @return float
     */
    public function getRating()
    {
        return $this->rating;
    }

   /**
     * Set createdAt
     *
     * @param string $createdAt
     *
     * @return Recent
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return string
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}

