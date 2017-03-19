<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Discover
 *
 * @ORM\Table(name="discover_2017")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\DiscoverRepository")
 */
class Discover
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
     * @ORM\Column(name="category_id", type="integer")
     */
    private $categoryId;

    /**
     * @var string
     *
     * @ORM\Column(name="category_name", type="string", length=20)
     */
    private $categoryName;
     /**
     * @var string
     *
     * @ORM\Column(name="year", type="string", length=10)
     */
    private $year;

    /**
     * @var array
     *
     * @ORM\Column(name="show_data", type="json_array")
     */
    private $showData;


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
     * Set categoryId
     *
     * @param integer $categoryId
     *
     * @return Discover
     */
    public function setCategoryId($categoryId)
    {
        $this->categoryId = $categoryId;

        return $this;
    }

    /**
     * Get categoryId
     *
     * @return int
     */
    public function getCategoryId()
    {
        return $this->categoryId;
    }

    /**
     * Set categoryName
     *
     * @param string $categoryName
     *
     * @return Discover
     */
    public function setCategoryName($categoryName)
    {
        $this->categoryName = $categoryName;

        return $this;
    }

    /**
     * Get categoryName
     *
     * @return string
     */
    public function getCategoryName()
    {
        return $this->categoryName;
    }
     /**
     * Set year
     *
     * @param string $year
     *
     * @return Discover
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
     * Set showData
     *
     * @param array $showData
     *
     * @return Discover
     */
    public function setShowData($showData)
    {
        $this->showData = $showData;

        return $this;
    }

    /**
     * Get showData
     *
     * @return array
     */
    public function getShowData()
    {
        return $this->showData;
    }
}

