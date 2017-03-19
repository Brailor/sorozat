<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Recent
 *
 * @ORM\Table(name="recent")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RecentRepository")
 */
class Recent
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
     * @ORM\Column(name="item_id", type="integer")
     */
    private $item_id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

     /**
     * @var int
     *
     * @ORM\Column(name="show_id", type="integer")
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
     * @var text
     *
     * @ORM\Column(name="plot", type="text")
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
     * Get item_id
     *
     * @return int
     */
    public function getItem_id()
    {
        return $this->item_id;
    }
    /**
     * Set item_id
     *
     * @param int $item_id
     *
     * @return Recent
     */
    public function setItem_id($item_id)
    {
        $this->item_id = $item_id;

        return $this;
    }
    /**
     * Set show_id
     *
     * @param int $show_id
     *
     * @return Recent
     */
    public function setShow_id($show_id)
    {
        $this->show_id = $show_id;

        return $this;
    }
    
      /**
     * Get show_id
     *
     * @return int
     */
    public function getShow_id()
    {
        return $this->show_id;
    }
    /**
     * Set name
     *
     * @param string $name
     *
     * @return Recent
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
     * Set category
     *
     * @param string $category
     *
     * @return Recent
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
     * @return Recent
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
     * @return Recent
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
     * @return Recent
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

