<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CronUpdater
 *
 * @ORM\Table(name="cron_updater")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\CronUpdaterRepository")
 */
class CronUpdater
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
     * @ORM\Column(name="update_index", type="integer")
     */
    private $updateIndex;
    
    /**
     * @var int
     *
     * @ORM\Column(name="max_index", type="integer")
     */
    private $maxIndex;



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
     * Set updateIndex
     *
     * @param integer $updateIndex
     *
     * @return CronUpdater
     */
    public function setUpdateIndex($updateIndex)
    {
        $this->updateIndex = $updateIndex;

        return $this;
    }

    /**
     * Get updateIndex
     *
     * @return int
     */
    public function getUpdateIndex()
    {
        return $this->updateIndex;
    }

    /**
     * Set maxIndex
     *
     * @param integer $maxIndex
     *
     * @return CronUpdater
     */
    public function setMaxIndex($maxIndex)
    {
        $this->maxIndex = $maxIndex;

        return $this;
    }

    /**
     * Get maxIndex
     *
     * @return int
     */
    public function getMaxIndex()
    {
        return $this->maxIndex;
    }
}

